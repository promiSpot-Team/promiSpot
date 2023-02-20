package com.ssafy.promispotback.member.model.service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ssafy.promispotback.exception.UnAuthorizedException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Service
public class JwtServiceImpl implements JwtService {
	
	/* 
	 * AccessToken : 매번 인가를 받을 때 사용하는 토큰. (보통 수명이 짧다.)
	 * RefreshToken : AccessToken의 수명이 다했을 때 AccessToken을 재발행 받기 위한 토큰. (보통 2주 정도로 기간이 길게 잡힌다.)
	 * 누군가를 로그아웃 시키려면 refreshToken을 db에서 지워버리면 되는데 그래도 accessToken의 수명동안은 바로 차단할 방법이 없다.
	*/
	public static final Logger logger = LoggerFactory.getLogger(JwtServiceImpl.class);
	
	private static final String SALT = "promispotSecret";
	private static final int ACCESS_TOKEN_EXPIRE_MINUTES = 3; // 분 단위
	private static final int REFRESH_TOKEN_EXPIRE_WEEKS = 3; // 주 단위

	@Override
	public <T> String createAccessToken(String key, T data) {
		return create(key, data, "access-token", 1000 * 60 * ACCESS_TOKEN_EXPIRE_MINUTES);
	}//createAccessToken

	@Override
	public <T> String createRefreshToken(String key, T data) { // AccessToken에 비해 유효기간을 길게
		return create(key, data, "refresh-token", 1000 * 60 * 60 * 24 * 7 * REFRESH_TOKEN_EXPIRE_WEEKS);
	}//createRefreshToken

	/*
	 * key : Claim에 셋팅될 key 값
	 * data : Claim에 셋팅될 data 값
	 * subject : payload에 sub의 value로 들어갈 subject 값
	 * expire : 토큰 유효기간 설정을 위한 값
	 * jwt 토큰의 구성 : header + payload + signature
	 */
	@Override
	public <T> String create(String key, T data, String subject, long expire) {
		String jwt = Jwts.builder()
				// Header 설정 : 토큰의 타입, 해쉬 알고리즘 정보 세팅
					.setHeaderParam("typ", "JWT")
					.setHeaderParam("regDate", System.currentTimeMillis()) // 생성시간
					// payload 설정 : 유효기간(Expriration), 토큰 제목(Subject), 데이터(Claim) 등 정보 셋팅)
					.setExpiration(new Date(System.currentTimeMillis() + expire)) // 토큰 유효기간
					.setSubject(subject) // 토큰 제목 설정 ex) access-token, refresh-token
					.claim(key, data) // 저장할 데이터
					// Signature 설정 : secret key를 활용한 암호화
					.signWith(SignatureAlgorithm.HS256, this.generateKey())
					.compact(); // 직렬화 처리
		return jwt;
	}//create

	// Signature 설정에 들어갈 key 생성
	private byte[] generateKey() {
		byte[] key = null;
		try {
			key = SALT.getBytes("UTF-8");
		}catch(UnsupportedEncodingException e) {
			if(logger.isInfoEnabled()) {
				e.printStackTrace();
			}else {
				logger.error("Making JWT Key Error ::: {}", e.getMessage());
			}
		}
		return key;
	}//generateKey

	@Override
	public Map<String, Object> get(String key) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
									.getRequest();
		String jwt = request.getHeader("access-token");
		Jws<Claims> claims = null;
		
		try {
			claims = Jwts.parser().setSigningKey(SALT.getBytes("UTF-8")).parseClaimsJws(jwt);
		} catch(Exception e) {
			logger.error(e.getMessage());
			throw new UnAuthorizedException();
		}
		
		Map<String, Object> value = claims.getBody();
		logger.info("value : {}", value);
		
		return value;
	}//get

	@Override
	public int getMemberSeq() {
		return (int) this.get("member").get("memberSeq");
	}//getMemberId

	// 전달 받은 토큰이 제대로 생성된것인지 확인 하고 문제가 있다면 UnauthorizedException을 발생.
	@Override
	public boolean checkToken(String jwt) {
		try {
			Jws<Claims> claims = Jwts.parser().setSigningKey(this.generateKey()).parseClaimsJws(jwt);
			logger.debug("claims: {}", claims);
			return true;
		}catch(Exception e) {
			logger.error(e.getMessage());
			return false;			
		}
	}//checkToken

}//JwtServiceImpl
