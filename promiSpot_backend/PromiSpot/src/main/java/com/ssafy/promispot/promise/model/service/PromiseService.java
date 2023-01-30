package com.ssafy.promispot.promise.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispot.promise.model.entity.PromiseEntity;

public interface PromiseService {
	
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
