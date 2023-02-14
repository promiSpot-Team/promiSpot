package com.ssafy.promispotback.place.model.service;

import java.sql.SQLException;
import java.util.List;

//import com.ssafy.promispotback.place.model.entity.VotePlaceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.place.model.entity.PlaceEntity;
import com.ssafy.promispotback.place.model.mapper.PlaceMapper;

@Service
public class PlaceServiceImpl implements PlaceService{
	
	@Autowired
	PlaceMapper placeMapper;

	// 장소 등록
	@Override
	public int insertPlace(PlaceEntity placeEntity) throws SQLException {
		return placeMapper.insertPlace(placeEntity);
	}

	// 장소 조회
	@Override
	public PlaceEntity getPlace(String placeId) throws SQLException {
		return placeMapper.getPlace(placeId);
	}

	// 장소 수정
	@Override
	public int modifyPlace(PlaceEntity placeEntity) throws SQLException {
		return placeMapper.modifyPlace(placeEntity);
	}

	// 장소 삭제
	@Override
	public int removePlace(String placeId) throws SQLException {
		return placeMapper.removePlace(placeId);
	}

	// 투표 완료 후 스케줄페이지에서 투표 장소 리스트 가져오기
//	@Override
//	public List<VotePlaceEntity> getPlaceList(int promiseSeq) throws SQLException {
//		return placeMapper.getPlaceList(promiseSeq);
//	}//getPlaceList


}
