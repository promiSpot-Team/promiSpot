package com.ssafy.promispotback.promise.model.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.promispotback.promise.dto.MapDto;
import com.ssafy.promispotback.promise.model.entity.DepartureEntity;
import com.ssafy.promispotback.promise.model.mapper.DepartureMapper;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

@Service
public class MapService {

    @Value("${kakao.map.apikey}")
    private String kakaoMapApiKey;

    @Autowired
    DepartureMapper departureMapper;



    // 출발장소를 받아 중간 지점을 알려주는 코드
    public List<MapDto> middlePoint(int promiseSeq) throws Exception {
        List<DepartureEntity> departureList = departureMapper.getDepartureList(promiseSeq);

        List<MapDto> mapList = new ArrayList<>();
        if(departureList.size() == 0) {
            return mapList;
        }

        double sumX = 0.0;
        double sumY = 0.0;
        double sumZ = 0.0;

        for (DepartureEntity departure : departureList) {
            double x = Double.parseDouble(departure.getDepartureX());
            double y = Double.parseDouble(departure.getDepartureY());

            double lat = y * Math.PI / 180;
            double lng = x * Math.PI / 180;

            sumX += Math.cos(lat) * Math.cos(lng);
            sumY += Math.cos(lat) * Math.sin(lng);
            sumZ += Math.sin(lat);
        }

        int n = departureList.size();
        double avgX = sumX / n;
        double avgY = sumY / n;
        double avgZ = sumZ / n;

        double midLng = Math.atan2(avgY, avgX);
        double hyp = Math.sqrt(avgX * avgX + avgY * avgY);
        double midLat = Math.atan2(avgZ, hyp);

        MapDto mapDto = new MapDto();
        mapDto.setMiddleX(String.valueOf(midLng *180/Math.PI));
        mapDto.setMiddleY(String.valueOf(midLat *180/Math.PI));

        // latitude 1km = 1 / 109.958489129649955
        // Longitude  1Km = 1 / 88.74

        double lng = midLng *180/Math.PI;
        double lat = midLat *180/Math.PI;


        // 후보군 9개를 저장 2Km 단위로 떨어져 있다.
        HashMap<MapDto, Integer> map = new HashMap<>();
        MapDto mapDto1 = new MapDto(String.valueOf(lng + 2.7/88.74), String.valueOf(lat + 3/109.958489129649955));
        MapDto mapDto2 = new MapDto(String.valueOf(lng + 2.5/88.74), String.valueOf(lat));
        MapDto mapDto3 = new MapDto(String.valueOf(lng + 2.8/88.74), String.valueOf(lat - 2.9/109.958489129649955));
        MapDto mapDto4 = new MapDto(String.valueOf(lng), String.valueOf(lat + 3.1/109.958489129649955));
        MapDto mapDto5 = new MapDto(String.valueOf(lng), String.valueOf(lat));
        MapDto mapDto6 = new MapDto(String.valueOf(lng), String.valueOf(lat - 3.05/109.958489129649955));
        MapDto mapDto7 = new MapDto(String.valueOf(lng - 2.67/88.74), String.valueOf(lat + 2.79/109.958489129649955));
        MapDto mapDto8 = new MapDto(String.valueOf(lng - 2.78/88.74), String.valueOf(lat));
        MapDto mapDto9 = new MapDto(String.valueOf(lng - 2.88/88.74), String.valueOf(lat - 2.88/109.958489129649955));

        map.put(mapDto1, 0);
        map.put(mapDto2, 0);
        map.put(mapDto3, 0);
        map.put(mapDto4, 0);
        map.put(mapDto5, 0);
        map.put(mapDto6, 0);
        map.put(mapDto7, 0);
        map.put(mapDto8, 0);
        map.put(mapDto9, 0);


        /*
            CS2 = 편의점       10
            CT1 = 문화시설     30
            FD6 = 음식점       15
            CE7 = 카페        15
            SW8 = 지하철역     20
         */

        String[] categorygroupcode = {"CT1", "FD6", "CE7"};


        // 가중치에 따라 점수 구하기
        for(MapDto mapdto : map.keySet()) {
            int score = 0;
            for(String category : categorygroupcode) {
                List<Map<String, Object>> placeList = getPlaceList(category, mapDto.getMiddleY(), mapDto.getMiddleX());
                if(category.equals("CS2")) {
                    score += placeList.size() * 10;
                } else if (category.equals("CT1")){
                    score += placeList.size() * 30;
                } else if (category.equals("FD6")){
                    score += placeList.size() * 15;
                } else if (category.equals("CE7")){
                    score += placeList.size() * 30;
                } else if (category.equals("SW8")){
                    score += placeList.size() * 20;
                }
            }
            map.put(mapdto, score);
        }

        List<MapDto> mapKey = new ArrayList<>(map.keySet());

        mapKey.sort( (o1, o2) -> map.get(o2).compareTo(map.get(o1)));

        System.out.println(map.toString());
        System.out.println(mapKey.toString());

        // 상위 4개 전달
        mapList.add(mapKey.get(0));
        mapList.add(mapKey.get(1));
        mapList.add(mapKey.get(2));
        mapList.add(mapKey.get(3));



        return mapList;
    }



    // 주변 정보를 가져오는 함수

    public List<Map<String, Object>> getPlaceList(
            String categoryGroupCode,
            String latitude,
            String longitude) throws Exception {



        // 카카오맵 API 키
        String apiKey = "64bbe2063e9e0b314a6060be44144a26";

        // latitude : 37.5385583136667
        // longitude : 127.082385189457

        // API 요청을 보낼 URL 설정
        String url = String.format("https://dapi.kakao.com/v2/local/search/category?category_group_code=%s&y=%s&x=%s&radius=%s&page=%s&size=%s",
                categoryGroupCode, latitude, longitude, 1000, 45, 15);

        // OkHttp 클라이언트 초기화
        OkHttpClient client = new OkHttpClient();

        // API 요청 객체 생성
        Request request = new Request.Builder()
                .url(url)
                .addHeader("Authorization", "KakaoAK " + apiKey)
                .build();

        // API 요청 보내기
        Response response = client.newCall(request).execute();

        // API 응답 결과를 JSON으로 파싱하기
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> resultMap = mapper.readValue(response.body().string(), Map.class);

        // 검색 결과 중 인기 검색어 리스트 반환
        return (List<Map<String, Object>>) resultMap.get("documents");
    }








}
