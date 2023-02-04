package com.ssafy.promispotback.member.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.ssafy.promispotback.member.model.entity.MemberEntity;
import com.ssafy.promispotback.member.model.service.JwtService;
import com.ssafy.promispotback.member.model.service.MemberService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin
@RestController
@RequestMapping("/member")
@Api("회원 컨트롤러  API")
public class MemberController {
	
	public static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	
	@Autowired
	private JwtService jwtService; 

	@Autowired
	private MemberService memberService;
	
	/* 로그인 */
	@ApiOperation(value="로그인", notes="Access-token과 로그인 결과 메세지를 반환한다.", response=Map.class)
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody @ApiParam(value="로그인 시 필요한 회원 정보(아이디, 비밀번호)" 
		, required=true) MemberEntity memberEntity){
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		
		try {
			MemberEntity loginMember = memberService.loginMember(memberEntity);
			if(loginMember != null) {
				String accessToken = jwtService.createAccessToken("memberId", loginMember.getMemberId()); // key, data
				String refreshToken = jwtService.createRefreshToken("memberId", loginMember.getMemberId()); // key, data
				memberService.saveRefreshToken(memberEntity.getMemberId(), refreshToken);
				logger.debug("로그인 accessToken 정보 : {}", accessToken);
				logger.debug("로그인 refreshToken 정보 : {}", refreshToken);
				resultMap.put("access-token", accessToken);
				resultMap.put("refresh-token", refreshToken);
				resultMap.put("message", SUCCESS);
				status = HttpStatus.ACCEPTED;
			} else {
				resultMap.put("message", FAIL);
				status = HttpStatus.NO_CONTENT;
			}
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
		
	}//login
	
	/* 로그아웃 */
	@ApiOperation(value="로그아웃", notes="로그아웃. 회원 정보를 담은 Token 제거.", response=Map.class)
	@GetMapping("/logout/{memberId}")
	public ResponseEntity<?> logout(@PathVariable("memberId") String memberId) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		try {
			memberService.deleteRefreshToken(memberId);
			resultMap.put("message", SUCCESS);
			status = HttpStatus.ACCEPTED;
		} catch (Exception e) {
			logger.error("로그아웃 실패.");
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}//logout
	
	
	/* 회원가입 */
	@ApiOperation(value = "회원가입 ", notes = "새로운 회원 정보를 입력한다. DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다. ", response = String.class )
	@PostMapping
	public ResponseEntity<?> registMember(@RequestBody @ApiParam(value="회원가입", required=true) 
		MemberEntity memberEntity) {
//		System.out.println("회원가입시도");
		logger.info("registMember - 호출");
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		try {
			if(memberService.registMember(memberEntity)) {
				int memberSeq = memberService.getMemberSeq(memberEntity.getMemberId());
				resultMap.put("message", SUCCESS);
				resultMap.put("memberSeq", memberSeq);
				status = HttpStatus.OK;
			}else {
				resultMap.put("message", FAIL);
				status = HttpStatus.NO_CONTENT;
			}
		} catch (Exception e) {
			e.printStackTrace();
			resultMap.put("message", exceptionHandling(e));
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<Map<String, Object>>(resultMap, status);
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
	public ResponseEntity<?> findMember(@RequestBody @PathVariable("memberSeq") 
		@ApiParam(value="회원일련번호", required=true) int memberSeq, HttpServletRequest request) {
//		System.out.println("회원 정보 조회 "+memberSeq);
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.UNAUTHORIZED;
		if(jwtService.checkToken(request.getHeader("access-token"))) {
			logger.info("사용 가능 토큰");
			MemberEntity member;
			try {
				member = memberService.findMember(memberSeq);
				if(member != null) { // 회원 있음
					resultMap.put("memberInfo", member);
					resultMap.put("message", SUCCESS);
					status = HttpStatus.ACCEPTED;
				}else { // 회원 없음
					resultMap.put("message", FAIL);
					status = HttpStatus.NO_CONTENT;			
				}
			} catch (Exception e) { // 오류
				logger.error("정보조회 실패 : {}", e);
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
			
		} else {
			logger.error("사용 불가능 토큰");
			resultMap.put("message", FAIL);
			status = HttpStatus.UNAUTHORIZED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
				
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
	
	/* 토큰 재발급 */
	@ApiOperation(value="AccessToken 재발급", notes="만료된 access token을 재발급 받는다.", response = Map.class)
	@PostMapping("/refresh")
	public ResponseEntity<?> refreshToken(@RequestBody MemberEntity memberEntity, HttpServletRequest request){
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		String token = request.getHeader("refresh-token");
		logger.debug("token : {}, memberEntity : {}", token, memberEntity);
		if(jwtService.checkToken(token)) {
			try {
				if(token.equals(memberService.getRefreshToken(memberEntity.getMemberId()))) {
					String accessToken = jwtService.createAccessToken("memberId", memberEntity.getMemberId());
					logger.debug("token : {}", accessToken);
					logger.debug("정상적으로 access token 재발급");
					resultMap.put("access-token", accessToken);
					resultMap.put("message", SUCCESS);
					status = HttpStatus.ACCEPTED;
				}
			} catch (Exception e) {
				logger.error(e.getMessage());
				resultMap.put("message", e.getMessage());
				status = HttpStatus.INTERNAL_SERVER_ERROR;
			}
		} else {
			logger.debug("refresh token도 사용 불가능.");
			status = HttpStatus.UNAUTHORIZED;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}//refreshToken
	
	// 에러 처리
	private ResponseEntity<String> exceptionHandling(Exception e) {
		return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}//exceptionHandling

}//MemberController
