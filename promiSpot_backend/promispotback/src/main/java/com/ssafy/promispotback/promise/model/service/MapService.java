package com.ssafy.promispotback.promise.model.service;


import com.ssafy.promispotback.promise.dto.MapDto;
import com.ssafy.promispotback.promise.model.entity.DepartureEntity;
import com.ssafy.promispotback.promise.model.mapper.DepartureMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MapService {

    @Value("${kakao.map.apikey}")
    private String kakaoMapApiKey;

    @Autowired
    DepartureMapper departureMapper;



    // 출발장소를 받아 중간 지점을 알려주는 코드
    public List<MapDto> middlePoint(int promiseSeq) throws SQLException {
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

        mapList.add(mapDto);

        return mapList;
    }





}
