package com.ssafy.promispotback.promise.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.mapper.PromiseMapper;

@Service
public class PromiseServiceImpl implements PromiseService{

	@Autowired
	PromiseMapper promiseMapper;
	
	// 약속 생성
	@Override
	public int createPromise(PromiseEntity promiseEntity) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}

	// 약속 조회 
	@Override
	public PromiseEntity getPromise(int promiseSeq) throws SQLException {
		return promiseMapper.getPromise(promiseSeq);
	}

	// 한 회원이 속한 약속 전부 조회
	@Override
	public List<PromiseEntity> getPromiseList(int memberSeq) throws SQLException {
		return promiseMapper.getPromiseList(memberSeq);
	}

	// 약속 수정 
	@Override
	public int modifyPromise(PromiseEntity promiseEntity) throws SQLException {
		return promiseMapper.modifyPromise(promiseEntity);
	}

	// 약속 삭제
	@Override
	public int removePromise(int promiseSeq) throws SQLException {
		return promiseMapper.removePromise(promiseSeq);
	}
	
	


}
