package com.ssafy.promispot.vote.model.mapper;


import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.vote.model.entity.VoteEntity;


@Mapper
public interface VoteMapper {
 
	//약속 장소 후보 등록
	int insertCandidatePlace(VoteEntity voteEntity) throws SQLException;
	
	//약속 장소 후보 가져오기
	VoteEntity getCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	List<VoteEntity> getCandidatePlaceList(int promiseId) throws SQLException;
	
	//약속 장소 후보 수정
	int modifyCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보 삭제
	int removeCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보 랭크 가져오기 - 하나의 약속에 속한 모든 랭킹 계산후 가져옴
	List<VoteEntity> getRankCandidatePlaceList(int promiseId) throws SQLException;
	

}