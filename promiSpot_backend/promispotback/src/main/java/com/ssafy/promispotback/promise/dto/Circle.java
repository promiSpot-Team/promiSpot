package com.ssafy.promispotback.promise.dto;

import java.util.ArrayList;

public class Circle {
    private final double lat; // 위도
    private final double lon; // 경도
    private final double radius; // 반지름 (단위: km)
    private static final double R = 6371; // 지구 반지름 (단위: km)

    public Circle(double lat, double lon, double radius) {
        this.lat = lat;
        this.lon = lon;
        this.radius = radius;
    }

    // 허버트 사인 함수를 이용하여 두 지점 사이의 거리를 계산하는 메소드
    private double haversine(double lat1, double lon1, double lat2, double lon2) {
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double d = R * c;

        return d;
    }

    // 원의 중심점과 거리 R 이내의 지점들을 구하는 메소드
    public ArrayList<double[]> getIntersectingLocations(ArrayList<double[]> locations) {
        ArrayList<double[]> result = new ArrayList<>();
        for (double[] loc : locations) {
            double dist = haversine(lat, lon, loc[0], loc[1]);
            if (dist <= radius) {
                result.add(loc);
            }
        }
        return result;
    }
}