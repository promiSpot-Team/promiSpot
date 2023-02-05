package com.ssafy.promispotback.promise.controller;

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

import com.ssafy.promispotback.place.model.entity.PlaceEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.service.PromiseService;

@RestController
@CrossOrigin
@RequestMapping("/promise")
public class PromiseController {
	
	@Autowired
	PromiseService promiseService;

	// 약속 생성
	@PostMapping("create")
	public ResponseEntity<?> createPromise(@RequestBody PromiseEntity promiseEntity) {
		try {
			int result = promiseService.createPromise(promiseEntity);
			
			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
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
			PromiseEntity promise = promiseService.getPromise(promiseSeq);
			
			if (promise != null) {
				System.out.println("success work");
				return new ResponseEntity<PromiseEntity>(promise, HttpStatus.OK);
			} else {
				System.out.println("fail work");
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
			
			List<PromiseEntity> promiseList = promiseService.getPromiseList(memberSeq);
			
			if (promiseList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<PromiseEntity>>(promiseList, HttpStatus.OK);
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
	
	
	
	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}


}
