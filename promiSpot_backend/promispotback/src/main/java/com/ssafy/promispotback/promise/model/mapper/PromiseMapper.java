package com.ssafy.promispotback.promise.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispotback.promise.model.entity.PromiseEntity;

@Mapper
public interface PromiseMapper {
	
	// 약속 생성
	public int createPromise(PromiseEntity promiseEntity) throws SQLException;
	
	// 약속 조회 
	public PromiseEntity getPromise(int promiseSeq) throws SQLException;
	
	// 한 회원이 속한 약속 전부 조회
	public List<PromiseEntity> getPromiseList(int memberSeq) throws SQLException;
	
	// 약속 수정 
	public int modifyPromise(PromiseEntity promiseEntity) throws SQLException;
	
	// 약속 삭제
	public int removePromise(int promiseSeq) throws SQLException;
	
	
	

}
