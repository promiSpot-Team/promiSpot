//package com.ssafy.promispotback.promise.controller;
//
//import java.util.List;
//import java.util.Map;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import okhttp3.OkHttpClient;
//import okhttp3.Request;
//import okhttp3.Response;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
//public class PopularKeywordController {
//
//    @GetMapping("/popularKeywords")
//    public List<Map<String, Object>> getPopularKeywords(
//            @RequestParam("latitude") String latitude,
//            @RequestParam("longitude") String longitude) throws Exception {
//
//        System.out.println(latitude + " " + longitude);
//
//        // 카카오맵 API 키
//        String apiKey = "64bbe2063e9e0b314a6060be44144a26";
//
//        // API 요청을 보낼 URL 설정
//        String url = String.format("https://dapi.kakao.com/v2/local/search/keyword.json?y=%s&x=%s", latitude, longitude);
//
//        // OkHttp 클라이언트 초기화
//        OkHttpClient client = new OkHttpClient();
//
//        // API 요청 객체 생성
//        Request request = new Request.Builder()
//                .url(url)
//                .addHeader("Authorization", "KakaoAK " + apiKey)
//                .build();
//
//        // API 요청 보내기
//        Response response = client.newCall(request).execute();
//
//        // API 응답 결과를 JSON으로 파싱하기
//        ObjectMapper mapper = new ObjectMapper();
//        Map<String, Object> resultMap = mapper.readValue(response.body().string(), Map.class);
//
//        // 검색 결과 중 인기 검색어 리스트 반환
//        return (List<Map<String, Object>>) resultMap.get("documents");
//    }
//
//
//}
