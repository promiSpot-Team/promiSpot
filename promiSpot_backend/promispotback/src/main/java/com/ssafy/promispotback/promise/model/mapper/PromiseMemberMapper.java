package com.ssafy.promispotback.promise.model.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.member.model.entity.MemberEntity;
import com.ssafy.promispotback.promise.model.entity.ParticipantEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispotback.promise.model.entity.PromiseMemberEntity;

@Mapper
public interface PromiseMemberMapper {
	
	
	// 약속 참여자 등록
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity) throws SQLException;
	
	
	// 약속 참여자 한 명 조회
	public ParticipantEntity getPromiseMember(
			@Param("promiseSeq") int promiseSeq, 
			@Param("memberSeq") int memberSeq) throws SQLException;
	
	
	// 약속 참여자 전체 조회
	public List<ParticipantEntity> getPromiseMemberList(int promiseSeq) throws SQLException;
	
	
	// 약속장 변경
	public int modifyPromiseMemberLeader(
			@Param("promiseSeq") int promiseSeq,
			@Param("memeberSeq") int memberSeq) throws SQLException;
	
	
	// 약속 참여자 삭제 
	public int removePromiseMember(
			@Param("promiseSeq") int promiseSeq,
			@Param("memberSeq") int memberSeq) throws SQLException;
	
	
}
