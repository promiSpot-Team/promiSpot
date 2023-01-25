package com.ssafy.promispot.member.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispot.member.model.entity.MemberEntity;

public interface MemberService {
	
	// 로그인
	public MemberEntity loginMember(MemberEntity memberEntity) throws Exception;
	
	// 회원가입
	public boolean registMember(MemberEntity memberEntity) throws Exception;
	
	// 회원수정
	public boolean modifyMember(MemberEntity memberEntity) throws Exception;
	
	// 회원탈퇴
	public boolean removeMember(int memberSeq) throws Exception;	
	
	// 회원정보조회
	public MemberEntity findMember(int memberSeq) throws Exception;
	
	// 회원들 조회
	public List<MemberEntity> findMemberList() throws Exception;
	
	// 리프래시토큰 저장
	public void saveRefreshToken(String memberId, String refreshToken) throws Exception;
	
	// 리프래시토큰 가져오기
	public Object getRefreshToken(String memberId) throws Exception;
	
	// 리프래시 토큰 삭제
	public void deleRefreshToken(String memberId) throws Exception;


}//MemberService
