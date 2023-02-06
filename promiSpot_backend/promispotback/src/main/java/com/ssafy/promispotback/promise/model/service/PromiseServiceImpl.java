package com.ssafy.promispotback.promise.model.service;

import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;

import com.ssafy.promispotback.promise.model.entity.PromiseDataEntity;
import com.ssafy.promispotback.promise.model.mapper.PromiseMemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.mapper.PromiseMapper;

@Service
public class PromiseServiceImpl implements PromiseService{

	@Autowired
	PromiseMapper promiseMapper;

	@Autowired
	PromiseMemberMapper promiseMemberMapper;
	
	// 약속 생성
	@Override
	public int createPromise(PromiseEntity promiseEntity) throws SQLException {
		return promiseMapper.createPromise(promiseEntity);
	}

	// 약속 조회 
	@Override
	public PromiseDataEntity getPromise(int promiseSeq) throws SQLException {
		PromiseDataEntity promiseData = promiseMapper.getPromise(promiseSeq);
		if(promiseData != null){
			promiseData.setParticipantList(promiseMemberMapper.getPromiseMemberList(promiseData.getPromiseSeq()));
		}
		return promiseData;
	}

	// 한 회원이 속한 약속 전부 조회
	@Override
	public List<PromiseDataEntity> getPromiseList(int memberSeq) throws SQLException {
		List<PromiseDataEntity> promiseList = promiseMapper.getPromiseList(memberSeq);
		if(!promiseList.isEmpty()){
			Iterator<PromiseDataEntity> data = promiseList.iterator();
			while(data.hasNext()){
				PromiseDataEntity promise = data.next();
				promise.setParticipantList(promiseMemberMapper.getPromiseMemberList(promise.getPromiseSeq()));
			}
		}
//		return promiseMapper.getPromiseList(memberSeq);
		return promiseList;
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
