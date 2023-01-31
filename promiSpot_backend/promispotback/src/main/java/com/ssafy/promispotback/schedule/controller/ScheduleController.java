package com.ssafy.promispotback.schedule.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.schedule.model.entity.ScheduleEntity;
import com.ssafy.promispotback.schedule.model.service.ScheduleService;

@RestController
@CrossOrigin
@RequestMapping("/schedule")
public class ScheduleController {
	
	@Autowired
	ScheduleService scheduleService;
	
	// 스케줄 생성
	@PostMapping("create")
	public ResponseEntity<?> createSchedule(@RequestBody ScheduleEntity scheduleEntity) {
		try {
			
			int result = scheduleService.createSchedule(scheduleEntity);
			
			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	
	// 스케줄 하나 조회
	@GetMapping("get/{scheduleSeq}")
	public ResponseEntity<?> getSchedule(@PathVariable("scheduleSeq") int scheduleSeq) {
		try {
			ScheduleEntity schedule = scheduleService.getSchedule(scheduleSeq);
			
			if (schedule != null) {
				System.out.println("success work");
				return new ResponseEntity<ScheduleEntity>(schedule, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	// 약속 해당하는 스케줄 전부 조회
	@GetMapping("getList/{promiseSeq}")
	public ResponseEntity<?> getScheduleList(@PathVariable("promiseSeq") int promiseSeq) {
		try {
			List<ScheduleEntity> scheduleList = scheduleService.getScheduleList(promiseSeq);
			
			if (scheduleList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<ScheduleEntity>>(scheduleList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	// 스케줄 수정
	@PutMapping("modify")
	public ResponseEntity<?> modifySchedule(@RequestBody ScheduleEntity scheduleEntity) {
		
		try {
			
			int result = scheduleService.modifySchedule(scheduleEntity);
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	// 스케줄 삭제
	@DeleteMapping("delete/{scheduleSeq}")
	public ResponseEntity<?> removePremoveScheduleromise(@PathVariable("scheduleSeq") int scheduleSeq) {
		
		try {
			int result = scheduleService.removeSchedule(scheduleSeq);
			
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	
	
	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
