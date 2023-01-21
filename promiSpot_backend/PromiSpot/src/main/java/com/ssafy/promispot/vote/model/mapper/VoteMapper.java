package com.ssafy.promispot.vote.model.mapper;


import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispot.vote.model.entity.VoteEntity;
import com.ssafy.promispot.vote.model.entity.VoteMemberEntity;


@Mapper
public interface VoteMapper {
 
	//약속 장소 후보 등록
	public int insertCandidatePlace(VoteEntity voteEntity) throws SQLException;
	
	//약속 장소 후보 가져오기
	public VoteEntity getCandidatePlace(int voteSeq) throws SQLException;
	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	public List<VoteEntity> getCandidatePlaceList(int promiseSeq) throws SQLException;
	
	//약속 장소 후보 수정(투표/투표취소)
	public int modifyCandidatePlace(int voteSeq) throws SQLException;
	
	//약속 장소 후보 삭제
	public int removeCandidatePlace(int voteSeq) throws SQLException;
	
	
	//사용자가 한 약속에서 이 장소를 투표한 건지 아닌지 조회
	public int isVoted(@Param("memberSeq") int memberSeq, @Param("voteSeq") int voteSeq) throws SQLException;
	
	//약속 장소 투표버튼 누르면 투표자 테이블에 추가
	public int insertVoter(VoteMemberEntity voteMemberEntity) throws SQLException;
	
	//약속 장소 투표를 해제하면 투표자 테이블에서 삭제
	public int removeVoter(@Param("memberSeq") int memberSeq, @Param("voteSeq") int voteSeq) throws SQLException;
	
	//'약속 장소 후보'를 아예 삭제하면 투표자에서도 투표했던 사람들을 다 삭제해야 한다.. 라는 로직은 나중에 서비스에서~
	

}