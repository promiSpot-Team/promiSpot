package com.ssafy.promispot.place.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.place.model.entity.PlaceEntity;

@Mapper
public interface PlaceMapper {
	
	// 장소 등록
	public int insertPlace(PlaceEntity placeEntity) throws SQLException;
	
	// 장소 조회
	public PlaceEntity getPlace(String placeSeq) throws SQLException;
	
	// 장소 수정
	public int modifyPlace(PlaceEntity placeEntity) throws SQLException;
	
	// 장소 삭제
	public int removePlace(String placeSeq) throws SQLException;
	
	
	

}
