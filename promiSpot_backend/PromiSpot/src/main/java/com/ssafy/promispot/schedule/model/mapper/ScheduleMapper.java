package com.ssafy.promispot.schedule.model.mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.schedule.model.entity.ScheduleEntity;

@Mapper
public interface ScheduleMapper {
	
	
	// 스케줄 생성
	public int createSchedule(ScheduleEntity scheduleEntity) throws SQLException;
	
	// 스케줄 조회
	public ScheduleEntity getSchedule(int scheduleId) throws SQLException;
	
	// 스케줄 수정
	public int modifySchedule(ScheduleEntity scheduleEntity) throws SQLException;
	
	// 스케줄 삭제
	public int removeSchedule(int scheduleId) throws SQLException;

}
