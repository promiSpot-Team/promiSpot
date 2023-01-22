package com.ssafy.promispot.promise.model.service;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ssafy.promispot.promise.model.entity.PromiseMemberEntity;

public interface PromiseMemberService {

	// 약속 참여자 등록
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity) throws SQLException;
	
	
	// 약속 참여자 한 명 조회
	public PromiseMemberEntity getPromiseMember(
			 int promiseSeq, 
			 int memberSeq) throws SQLException;
	
	
	// 약속 참여자 전체 조회
	public List<PromiseMemberEntity> getPromiseMemberList(int promiseSeq) throws SQLException;
	
	
	// 약속장 변경
	public int modifyPromiseMemberLeader(
			int promiseSeq,
			int memberSeq) throws SQLException;
	
	
	// 약속 참여자 삭제 
	public int removePromiseMember(
			int promiseSeq,
			int memberSeq) throws SQLException;
	
	
}
