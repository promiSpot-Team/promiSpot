package com.ssafy.promispot.schedule.model.service;

import java.sql.SQLException;

import com.ssafy.promispot.schedule.model.entity.ScheduleEntity;

public interface ScheduleService {
	
	// 스케줄 생성
	public int createSchedule(ScheduleEntity scheduleEntity) throws SQLException;
	
	// 스케줄 조회
	public ScheduleEntity getSchedule(int scheduleSeq) throws SQLException;
	
	// 스케줄 수정
	public int modifySchedule(ScheduleEntity scheduleEntity) throws SQLException;
	
	// 스케줄 삭제
	public int removeSchedule(int scheduleSeq) throws SQLException;

}
