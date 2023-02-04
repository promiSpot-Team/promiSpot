package com.ssafy.promispotback.member.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispotback.member.model.entity.MemberEntity;

@Mapper
public interface MemberMapper {
	
	// 로그인
	public MemberEntity loginMember(MemberEntity memberEntity) throws SQLException;
	
	// 회원가입
	public int registMember(MemberEntity memberEntity) throws SQLException;
	
	// 회원수정
	public int modifyMember(MemberEntity memberEntity) throws SQLException;
	
	// 회원탈퇴
	public int removeMember(int memberSeq) throws SQLException;	
	
	// 회원정보조회
	public MemberEntity findMember(int memberSeq) throws SQLException;
	
	// 회원들 조회
	public List<MemberEntity> findMemberList() throws SQLException;
	
	// 리프래시토큰 저장
	public void saveRefreshToken(@Param("memberId") String memberId, @Param("token") String refreshToken) throws Exception;
	
	// 리프래시토큰 가져오기
	public Object getRefreshToken(String memberId) throws Exception;
	
	// 리프래시 토큰 삭제
	public void deleteRefreshToken(String memberId) throws Exception;

	// 회원 일련번호 조회
	public int getMemberSeq(String memberId) throws Exception;

	// id 중복 체크
	public int checkId(String memberId) throws  Exception;


}//MemberMapper
