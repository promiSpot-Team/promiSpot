package com.ssafy.promispotback.promise.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.promispotback.promise.dto.MapDto;
import com.ssafy.promispotback.promise.model.entity.PromiseDataEntity;
import com.ssafy.promispotback.promise.model.service.MapService;
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

import com.ssafy.promispotback.place.model.entity.PlaceEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.service.PromiseService;

@RestController
@CrossOrigin
@RequestMapping("/promise")
public class PromiseController {
	
	@Autowired
	PromiseService promiseService;

	@Autowired
	MapService mapService;

	// 약속 생성
	@PostMapping("/create")
	public ResponseEntity<?> createPromise(@RequestBody PromiseEntity promiseEntity) {
//		System.out.println("ddd");
		Map<String, Object> resultMap = new HashMap<>();
		try {
			int result = promiseService.createPromise(promiseEntity);
			
			if(result != 0) { // 생성 완료 시
				resultMap.put("message", "success");
				resultMap.put("promiseSeq", promiseEntity.getPromiseSeq()); // 자동 생성된 pk 값 담아주기
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
			} else { // 생성 실패
				resultMap.put("message", "fail");
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.ACCEPTED);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	// 약속 조회 
	@GetMapping("get/{promiseSeq}")
	public ResponseEntity<?> getPromise(@PathVariable("promiseSeq") int promiseSeq) {
		try {
			PromiseDataEntity promise = promiseService.getPromise(promiseSeq);
			
			if (promise != null) {
				System.out.println("success work");
				return new ResponseEntity<PromiseDataEntity>(promise, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	// 약속 수정 
	@PutMapping("modify")
	public ResponseEntity<?> modifyPromise(@RequestBody PromiseEntity promiseEntity) {
		
		try {
			
			int result = promiseService.modifyPromise(promiseEntity);

			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	// 약속 삭제
	@DeleteMapping("delete/{promiseSeq}")
	public ResponseEntity<?> removePromise(@PathVariable("promiseSeq") int promiseSeq) {

		System.out.println(promiseSeq);

		try {
			int result = promiseService.removePromise(promiseSeq); 
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	// 한 회원이 속한 약속 전부 조회
	@GetMapping("getList/{memberSeq}")
	public ResponseEntity<?> getPromiseList(@PathVariable("memberSeq") int memberSeq) {
		try {

			List<PromiseDataEntity> promiseList = promiseService.getPromiseList(memberSeq);

			if (promiseList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<PromiseDataEntity>>(promiseList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	@PutMapping("modifyVote/{promiseSeq}")
	public ResponseEntity<?> modifyVote(@PathVariable("promiseSeq") int promiseSeq) {

		try {
			int result = promiseService.modifyVote(promiseSeq);
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	@PutMapping("modifySchedule/{promiseSeq}")
	public ResponseEntity<?> modifySchedule(@PathVariable("promiseSeq") int promiseSeq) {

		try {
			int result = promiseService.modifySchedule(promiseSeq);
			if (result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	// 출발지 리스트를 통해 중간 위치 반환 함수
	@GetMapping("getMiddle/{promiseSeq}")
	public ResponseEntity<?> getMiddle(@PathVariable("promiseSeq") int promiseSeq) {
		try {

			List<MapDto> mapDtoList = mapService.middlePoint(promiseSeq);

			if (mapDtoList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<MapDto>>(mapDtoList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
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
