package com.ssafy.promispotback.place.model.service;

import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.ssafy.promispotback.place.model.entity.PlaceEntity;


public interface PlaceService {
	
	// 장소등록 
	public int insertPlace(PlaceEntity placeEntity) throws SQLException;
	
	// 장소 조회
	public PlaceEntity getPlace(String placeId) throws SQLException;
	
	// 장소 수정
	public int modifyPlace(PlaceEntity placeEntity) throws SQLException;
	
	// 장소 삭제
	public int removePlace(String placeId) throws SQLException;

}
