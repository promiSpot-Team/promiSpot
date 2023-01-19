package com.ssafy.promispot.promise.model.mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.promise.model.entity.PromiseEntity;

@Mapper
public interface PromiseMapper {
	
	// 약속 생성
	public int createPromise(PromiseEntity promiseEntity) throws SQLException;
	
	// 약속 조회 
	public PromiseEntity getPromise(int promiseId) throws SQLException;
	
	// 약속 수정 
	public int modiftPromise(PromiseEntity promiseEntity) throws SQLException;
	
	// 약속 삭제
	public int removePromise(int promiseId) throws SQLException;
	
	
	

}
