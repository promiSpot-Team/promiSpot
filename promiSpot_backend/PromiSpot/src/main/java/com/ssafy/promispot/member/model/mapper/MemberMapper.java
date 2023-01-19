package com.ssafy.promispot.member.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.member.model.entity.MemberEntity;

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

}//MemberMapper
