package com.ssafy.promispotback.promise.controller;

import java.util.List;

import com.ssafy.promispotback.promise.model.entity.ParticipantEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.service.PromiseService;
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

import com.ssafy.promispotback.promise.dto.PromiseMemberModifyLeaderDto;
import com.ssafy.promispotback.promise.model.entity.PromiseMemberEntity;
import com.ssafy.promispotback.promise.model.service.PromiseMemberService;

@RestController
@CrossOrigin
@RequestMapping("/promise/member")
public class PromiseMemberController {
	
	@Autowired
	PromiseMemberService promiseMemberService;

	@Autowired
	PromiseService promiseService;
	
	// 약속 참여자 등록
	@PostMapping("regist")
	public ResponseEntity<?> registPromiseMember(@RequestBody List<PromiseMemberEntity> promiseMemberList) {
		try {
			int result = promiseMemberService.registPromiseMember(promiseMemberList);
			
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

	// 약속 참여자 전체 조회
	@GetMapping("getList/{promiseSeq}")
	public ResponseEntity<?> getPromiseMemberList(@PathVariable("promiseSeq") int promiseSeq) {
		try {

			List<ParticipantEntity> promiseMemberList = promiseMemberService.getPromiseMemberList(promiseSeq);


			if (promiseMemberList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<ParticipantEntity>>(promiseMemberList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}


	
	// 약속 참여자 한 명 조회
	@GetMapping("get/{promiseSeq}/{memberSeq}")
	public ResponseEntity<?> getPromiseMember(@PathVariable("promiseSeq") int promiseSeq, @PathVariable("memberSeq") int memberSeq) {
		try {
			ParticipantEntity promiseMember = promiseMemberService.getPromiseMember(promiseSeq, memberSeq);
			
			if (promiseMember != null) {
				System.out.println("success work");
				return new ResponseEntity<ParticipantEntity>(promiseMember, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}


	// 약속 참여자 삭제
	@DeleteMapping("delete/{promiseSeq}/{memberSeq}")
	public ResponseEntity<?> removePromiseMember(@PathVariable("promiseSeq") int promiseSeq, @PathVariable("memberSeq") int memberSeq) {

		try {
			int result = promiseMemberService.removePromiseMember(promiseSeq, memberSeq);
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
	

	
	// 약속장 변경
	@PutMapping("modifyLeader")
	public ResponseEntity<?> modifyPromiseMemberLeader(@RequestBody PromiseMemberModifyLeaderDto promiseMemberModifyLeaderdto) {
		
		try {

			int result1 = promiseMemberService.modifyPromiseMemberLeader(promiseMemberModifyLeaderdto);


			int result2 = promiseService.modifyLeader(promiseMemberModifyLeaderdto);

			int result = result1 * result2;

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





