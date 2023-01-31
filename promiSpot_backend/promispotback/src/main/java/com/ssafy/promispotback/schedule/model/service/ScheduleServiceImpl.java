package com.ssafy.promispotback.schedule.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.schedule.model.entity.ScheduleEntity;
import com.ssafy.promispotback.schedule.model.mapper.ScheduleMapper;

@Service
public class ScheduleServiceImpl implements ScheduleService{

	@Autowired
	ScheduleMapper scheduleMapper;
	
	// 스케줄 생성
	@Override
	public int createSchedule(ScheduleEntity scheduleEntity) throws SQLException {
		return scheduleMapper.createSchedule(scheduleEntity);
	}

	// 스케줄 조회
	@Override
	public ScheduleEntity getSchedule(int scheduleSeq) throws SQLException {
		return scheduleMapper.getSchedule(scheduleSeq);
	}
	
	// 약속 해당하는 스케줄 전부 조회
	@Override
	public List<ScheduleEntity> getScheduleList(int promiseSeq) throws SQLException {
		return scheduleMapper.getScheduleList(promiseSeq);
	}

	// 스케줄 수정
	@Override
	public int modifySchedule(ScheduleEntity scheduleEntity) throws SQLException {
		return scheduleMapper.modifySchedule(scheduleEntity);
	}

	// 스케줄 삭제
	@Override
	public int removeSchedule(int scheduleSeq) throws SQLException {
		return scheduleMapper.removeSchedule(scheduleSeq);
	}



}
