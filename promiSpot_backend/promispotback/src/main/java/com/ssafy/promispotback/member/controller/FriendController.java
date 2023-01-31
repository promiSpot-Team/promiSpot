package com.ssafy.promispotback.member.controller;

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

import com.ssafy.promispotback.member.model.entity.FriendRequestEntity;
import com.ssafy.promispotback.member.model.entity.MemberEntity;
import com.ssafy.promispotback.member.model.service.FriendService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@RequestMapping("/friend")
@Api("친구 컨트롤러  API")
public class FriendController {
	
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private FriendService friendService;
	
	// 친구 신청
	@ApiOperation(value = "친구 신청", notes = "친구 신청. DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@PostMapping("/request")
	public ResponseEntity<?> requestFriend(@RequestBody @ApiParam(value="친구 신청", required=true) 
		FriendRequestEntity friendRequestEntity) {	
		
		try {
			if(friendService.requestFriend(friendRequestEntity)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);			
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//requestFriend
	
	// 친구 신청 목록 조회 - 나한테 온 친구 신청(0), 내가 신청한 친구 보기(1)
	@ApiOperation(value = "친구 신청 목록 조회", notes = "order : 나한테 온 친구 신청(0), 내가 신청한 친구 보기(1)", response = String.class)
	@GetMapping("/{memberSeq}/{order}")
	public ResponseEntity<?> getRequestFriend(@RequestBody @ApiParam(value="회원일련번호, 받은0/보낸1", required=true) 
		@PathVariable("memberSeq") int memberSeq, @PathVariable("order") int order){
		
		try {
			List<MemberEntity> memberList = friendService.getRequestFriend(memberSeq, order);
			if(memberList != null) {
				return new ResponseEntity<List<MemberEntity>>(memberList, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}//getRequestFriend
	
	// 친구 신청 승인
	@ApiOperation(value = "친구 신청 승인", notes = "친구 신청 승인. DB update 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@PutMapping("request/{friendRequestSeq}")
	public ResponseEntity<?> approvalFriend(@RequestBody @ApiParam(value="친구 신청 일련번호", required=true) 
	@PathVariable("friendRequestSeq") int friendRequestSeq){
		
		try {
			if(friendService.approvalFriend(friendRequestSeq)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//approvalFriend
	
	// 친구 신청 거절
	@ApiOperation(value = "친구 신청 거절", notes = "친구 신청 거절. DB update 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class)
	@DeleteMapping("request/{friendRequestSeq}")
	public ResponseEntity<?> rejectFriend(@RequestBody @ApiParam(value="친구 신청 일련번호", required=true) 
		@PathVariable("friendRequestSeq") int friendRequestSeq){
		
		try {
			if(friendService.rejectFriend(friendRequestSeq)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//rejectFriend
	
	// 친구 정보 조회 (친구 검색)
	@ApiOperation(value = "친구 정보 조회", notes = "친구 정보 조회 (친구 검색). 아이디 혹은 전화번호로 검색된 친구를 반환한다. ", response = String.class)
	@GetMapping("/{memberInfo}")
	public ResponseEntity<?> findFriend(@RequestBody @ApiParam(value="친구 아이디 혹은 전화번호", required=true) 
		@PathVariable("memberInfo") String memberInfo){
		
		try {
			MemberEntity member = friendService.findFriend(memberInfo);
			if(member != null) {
				return new ResponseEntity<MemberEntity>(member, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//findFriend
	
	// 친구 목록 조회
	@ApiOperation(value = "친구 목록 조회", notes = "친구 목록 조회 현재 로그인 한 사용자의 친구목록을 반환한다. ", response = String.class)
	@GetMapping("friends/{memberSeq}")
	public ResponseEntity<?> findFriendList(@RequestBody @ApiParam(value="회원 일련 번호", required=true) 
		@PathVariable("memberSeq") int memberSeq){
		
		try {
			List<MemberEntity> memberList = friendService.findFriendList(memberSeq);
			if(memberList != null) {
				return new ResponseEntity<List<MemberEntity>>(memberList, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
		
	}//findFriendList

	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}//exceptionHandling
		
}//FriendController
