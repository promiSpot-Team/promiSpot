package com.ssafy.promispot.promise.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispot.promise.model.entity.PromiseMemberEntity;

@Mapper
public interface PromiseMemberMapper {
	
	
	// 약속 참여자 등록
	public int registPromiseMember(PromiseMemberEntity promiseMemberEntity) throws SQLException;
	
	
	// 약속 참여자 한 명 조회
	public PromiseMemberEntity getPromiseMember(int promiseId, int memberSeq) throws SQLException;
	
	
	// 약속 참여자 전체 조회
	public List<PromiseMemberEntity> getPromiseMemberList(int promiseId) throws SQLException;
	
	
	// 약속장 변경
	public int modifyPromiseMemberLeader(
			@Param("promiseId") int promiseId,
			@Param("beforeMemberSeq") int beforeMemberSeq, 
			@Param("afterMemberSeq") int afterMemberSeq) throws SQLException;
	
	
	// 약속 참여자 삭제 
	public int removePromiseMember(
			@Param("promiseId") int promiseId,
			@Param("memberSeq") int memberSeq) throws SQLException;
	
	
}
