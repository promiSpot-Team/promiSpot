package com.ssafy.promispotback.promise.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.promise.model.entity.ParticipantEntity;

import com.ssafy.promispotback.promise.dto.PromiseMemberModifyLeaderDto;
import com.ssafy.promispotback.promise.model.entity.PromiseMemberEntity;

public interface PromiseMemberService {

	// 약속 참여자 등록
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity) throws SQLException;
	
	
	// 약속 참여자 한 명 조회
	public ParticipantEntity getPromiseMember(
			 int promiseSeq, 
			 int memberSeq) throws SQLException;
	
	
	// 약속 참여자 전체 조회
	public List<ParticipantEntity> getPromiseMemberList(int promiseSeq) throws SQLException;
	
	
	// 약속장 변경
	public int modifyPromiseMemberLeader(
			PromiseMemberModifyLeaderDto promiseMemberModifyLeaderdto) throws SQLException;
	
	
	// 약속 참여자 삭제 
	public int removePromiseMember(
			int promiseSeq,
			int memberSeq) throws SQLException;
	
	
}
