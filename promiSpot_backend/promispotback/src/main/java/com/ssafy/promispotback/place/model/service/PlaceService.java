package com.ssafy.promispotback.place.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.place.model.entity.VotePlaceEntity;
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

	// 투표 완료 후 스케줄페이지에서 투표 장소 리스트 가져오기
	public List<VotePlaceEntity> getPlaceList(int promiseSeq) throws SQLException;

}
