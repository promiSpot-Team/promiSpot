package com.ssafy.promispotback.member.model.service;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.member.model.entity.RequestMemberEntity;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispotback.member.model.entity.FriendRequestEntity;
import com.ssafy.promispotback.member.model.entity.MemberEntity;

public interface FriendService {
	
	// 친구 신청
	public boolean requestFriend(FriendRequestEntity friendRequestEntity) throws SQLException;
	
	// 친구 신청 목록 조회 (나한테 온 친구 신청 보기)
	public List<RequestMemberEntity> getRequestFriend(@Param("memberSeq") int memberSeq
			, @Param("order") int order) throws SQLException;
	
	// 친구 신청 승인
	public boolean approvalFriend(int friendRequestSeq) throws SQLException;
	
	// 친구 신청 거절
	public boolean rejectFriend(int friendRequestSeq) throws SQLException;
	
	// 친구 정보 조회
	public List<MemberEntity> findFriend(String memberId) throws SQLException;
	
	// 친구 목록 조회
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException;

}//FriendService
