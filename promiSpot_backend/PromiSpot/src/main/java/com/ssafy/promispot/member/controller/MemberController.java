package com.ssafy.promispot.member.controller;

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

import com.ssafy.promispot.member.model.entity.MemberEntity;
import com.ssafy.promispot.member.model.service.MemberService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@RequestMapping("/member")
@Api("회원 컨트롤러  API")
public class MemberController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@Autowired
	private MemberService memberService;
	
	/* 로그인 */
	/* 로그아웃 */
	
	/* 회원가입 */
	@ApiOperation(value = "회원가입 ", notes = "새로운 회원 정보를 입력한다. DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class )
	@PostMapping
	public ResponseEntity<?> registMember(@RequestBody @ApiParam(value="회원가입", required=true) 
		MemberEntity memberEntity) {
		System.out.println("회원가입시도");
		try {
			if(memberService.registMember(memberEntity)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}//registMember
	
	/* 회원 정보 수정 */
	@ApiOperation(value = "회원 정보 수정 ", notes = "회원 정보를 수정한다. 그리고 DB 수정 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PutMapping("/{memberSeq}")
	public ResponseEntity<?> modifyMember(@RequestBody @ApiParam(value="회원정보수정", required = true) 
		MemberEntity memberEntity) {
		try {
			if(memberService.modifyMember(memberEntity)) {
				System.out.println("memberModify SUCCESS!");
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);			
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}//modifyMember

	
	/* 회원 탈퇴 */
	@ApiOperation(value = "회원탈퇴 ", notes = "회원탈퇴 'success' or 'fail' 문자열 반환 ", response = String.class ) 
	@DeleteMapping("/{memberSeq}")
	public ResponseEntity<?> removeMember(@RequestBody @ApiParam(value="회원탈퇴", required=true) 
	@PathVariable int memberSeq) {
		try {
			if(memberService.removeMember(memberSeq)) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);			
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}//removeMember

	
	/* 회원 정보 조회 */
	@ApiOperation(value = "회원 정보 조회 ", notes = "회원 정보 조회 or 'fail' 문자열 반환 ", response = MemberEntity.class) 
	@GetMapping("/{memberSeq}")
	public ResponseEntity<?> findMember(@PathVariable("memberSeq") 
		@ApiParam(value="회원일련번호", required=true) int memberSeq) {
		System.out.println("회원 정보 조회 "+memberSeq);
		MemberEntity member;
		try {
			member = memberService.findMember(memberSeq);
			if(member != null) {
				return new ResponseEntity<MemberEntity>(member, HttpStatus.OK);	
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);				
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
				
	}//findMember
	
	/* 회원 목록 조회 */
	@ApiOperation(value = "회원 목록 조회 ", notes = "회원 정보 조회 or 'fail' 문자열 반환 ", response = MemberEntity.class) 
	@GetMapping("/memberList")
	public ResponseEntity<?> findMemberList()  {
		System.out.println("회원 목록 조회 ");
		try {
			List<MemberEntity> memberList = memberService.findMemberList();
			if(memberList != null) {
				return new ResponseEntity<List<MemberEntity>>(memberList, HttpStatus.OK);					
			}else {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);									
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}		
	}//findMemberList
	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}//exceptionHandling

}//MemberController
