package com.ssafy.promispot.schedule.model.service;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;

import com.ssafy.promispot.schedule.model.entity.ScheduleEntity;
import com.ssafy.promispot.schedule.model.mapper.ScheduleMapper;

public class ScheduleServiceImpl implements ScheduleService{

	@Autowired
	ScheduleMapper scheduleMapper;
	
	
	@Override
	public int createSchedule(ScheduleEntity scheduleEntity) throws SQLException {
		return scheduleMapper.createSchedule(scheduleEntity);
	}

	@Override
	public ScheduleEntity getSchedule(int scheduleSeq) throws SQLException {
		return scheduleMapper.getSchedule(scheduleSeq);
	}

	@Override
	public int modifySchedule(ScheduleEntity scheduleEntity) throws SQLException {
		return scheduleMapper.modifySchedule(scheduleEntity);
	}

	@Override
	public int removeSchedule(int scheduleSeq) throws SQLException {
		return scheduleMapper.removeSchedule(scheduleSeq);
	}

}
