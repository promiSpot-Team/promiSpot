package com.ssafy.promispot.vote.model.mapper;


import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.vote.model.entity.VoteEntity;


@Mapper
public interface VoteMapper {
 
	//약속 장소 후보 등록
	public int insertCandidatePlace(VoteEntity voteEntity) throws SQLException;
	
	//약속 장소 후보 가져오기
	public VoteEntity getCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	public List<VoteEntity> getCandidatePlaceList(int promiseId) throws SQLException;
	
	//약속 장소 후보 수정(투표/투표취소)
	public int modifyCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보 삭제
	public int removeCandidatePlace(int voteId) throws SQLException;
	
	//약속 장소 후보 랭크 가져오기 - 하나의 약속에 속한 모든 랭킹 계산후 가져옴
	public List<VoteEntity> getRankCandidatePlaceList(int promiseId) throws SQLException;
	
	//사용자가 '한 약속에서 이 장소'(=약속장소투표번호 voteId로 구분)를 투표한 건지 아닌지 조회
	public int isVoted(int promiseMemberId, int voteId) throws SQLException;
	

}