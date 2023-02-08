package com.ssafy.promispotback.member.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.promispotback.member.model.entity.FileEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.member.model.entity.MemberEntity;
import com.ssafy.promispotback.member.model.mapper.MemberMapper;
import org.springframework.web.multipart.MultipartFile;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	private FileHandler fileHandler;

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
//		if(memberEntity.getMemberId() == null || memberEntity.getMemberPass() == null) {
//			throw new Exception();
//		}
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
	
	@Override
	public void saveRefreshToken(String memberId, String refreshToken) throws Exception {
		Map<String, String> map = new HashMap<>();
		map.put("memberId", memberId);
		map.put("token", refreshToken);
		memberMapper.saveRefreshToken(memberId, refreshToken);		
	}//saveRefreshToken

	@Override
	public Object getRefreshToken(String memberId) throws Exception {
		return memberMapper.getRefreshToken(memberId);
	}//getRefreshToken

	@Override
	public void deleteRefreshToken(String memberId) throws Exception {
		Map<String, String> map = new HashMap<>();
		map.put("memberId", memberId);
		map.put("token", null);
		memberMapper.deleteRefreshToken(memberId);
	}//deleRefreshToken

	/* 회원 일련번호 가져오기 */
	@Override
	public int getMemberSeq(String memberId) throws Exception {
		return memberMapper.getMemberSeq(memberId);
	}

	/* id 중복체크 */
	@Override
	public boolean checkId(String memberId) throws Exception {
		return memberMapper.checkId(memberId) == 0;
	}//checkId

	/* 회원 프로필 이미지 저장 */
	@Override
	public FileEntity saveFile(MultipartFile multipartFile) throws Exception {
		return fileHandler.saveFile(multipartFile);
	}//saveFile


}//MemberServiceImpl
