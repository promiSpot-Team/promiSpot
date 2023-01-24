package com.ssafy.promispot.member.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispot.member.model.entity.MemberEntity;
import com.ssafy.promispot.member.model.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberMapper memberMapper;

	/* 회원 로그인 */
	@Override
	public MemberEntity loginMember(MemberEntity memberEntity) throws Exception {
		if(memberEntity.getMemberId() == null || memberEntity.getMemberPass() == null) {
			return null;
		}
		return memberMapper.loginMember(memberEntity);
	}//loginMember

	/* 회원 가입 */
	@Override
	public boolean registMember(MemberEntity memberEntity) throws Exception {
		if(memberEntity.getMemberId() == null || memberEntity.getMemberPass() == null) {
			throw new Exception();
		}
		return memberMapper.registMember(memberEntity) == 1;
	}//registMember

	/* 회원 정보 수정 */
	@Override
	public boolean modifyMember(MemberEntity memberEntity) throws Exception {
		if(memberEntity.getMemberId() == null || memberEntity.getMemberPass() == null) {
			throw new Exception();
		}
		return memberMapper.modifyMember(memberEntity) == 1;
	}//modifyMember

	/* 회원 탈퇴 */
	@Override
	public boolean removeMember(int memberSeq) throws Exception {
		return memberMapper.removeMember(memberSeq) == 1;
	}//removeMember

	/* 회원 조회 */
	@Override
	public MemberEntity findMember(int memberSeq) throws Exception {		
		return memberMapper.findMember(memberSeq);
	}//findMember

	/* 회원 목록 조회 */
	@Override
	public List<MemberEntity> findMemberList() throws Exception {
		return memberMapper.findMemberList();
	}//findMemberList


}//MemberServiceImpl
