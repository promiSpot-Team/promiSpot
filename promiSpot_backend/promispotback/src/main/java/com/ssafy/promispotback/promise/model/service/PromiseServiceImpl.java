package com.ssafy.promispotback.promise.model.service;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Iterator;
import java.util.List;

import com.ssafy.promispotback.promise.dto.PromiseMemberModifyLeaderDto;
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
		String[] day = {"", "월", "화", "수", "목", "금", "토", "일"};
		if(promiseEntity.getPromiseDate() == null){
			// 현재 날짜 구하기 (시스템 시계, 시스템 타임존)
			LocalDate now = LocalDate.now();
			SimpleDateFormat formatter = new SimpleDateFormat("hh:mm aaa");
			String nowDate = String.format("%d년 %d월 %d일"
					, now.getYear(), now.getMonthValue(), now.getDayOfMonth());

			String f = LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm a"));
			promiseEntity.setPromiseDate(nowDate);
			promiseEntity.setPromiseTime(f);
			promiseEntity.setPromiseDay(day[now.getDayOfWeek().getValue()] + "요일");
		}
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

	@Override
	public int modifyLeader(PromiseMemberModifyLeaderDto promiseMemberModifyLeaderDto) throws SQLException {
		PromiseEntity promiseEntity = new PromiseEntity();
		promiseEntity.setPromiseSeq(promiseMemberModifyLeaderDto.getPromiseSeq());
		promiseEntity.setPromiseLeader(promiseMemberModifyLeaderDto.getAfterMemberSeq());

		return promiseMapper.modifyPromise(promiseEntity);
	}

	// 약속 삭제
	@Override
	public int removePromise(int promiseSeq) throws SQLException {
		return promiseMapper.removePromise(promiseSeq);
	}

	@Override
	public int modifyVote(int promiseSeq) throws SQLException {
		return promiseMapper.modifyVote(promiseSeq);
	}

	@Override
	public int modifySchedule(int promiseSeq) throws SQLException {
		return promiseMapper.modifySchedule(promiseSeq);
	}


}
