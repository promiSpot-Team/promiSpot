package com.ssafy.promispotback.member.model.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.promispotback.member.model.entity.FriendRequestEntity;
import com.ssafy.promispotback.member.model.entity.MemberEntity;
import com.ssafy.promispotback.member.model.mapper.FriendMapper;

@Service
public class FriendServiceImpl implements FriendService {
	
	@Autowired
	private FriendMapper friendMapper;

	// 친구 신청
	@Override
	public boolean requestFriend(FriendRequestEntity friendRequestEntity) throws SQLException {
		return friendMapper.requestFriend(friendRequestEntity) == 1;
	}//requestFriend

	// 친구 신청 목록 조회 - 나한테 온 친구 신청(received), 내가 신청한 친구 보기(sent)
	@Override
	public List<MemberEntity> getRequestFriend(int memberSeq, int order) throws SQLException {
		return friendMapper.getRequestFriend(memberSeq, order);
	}//getRequestFriend

	// 친구 신청 승인
	@Override
	public boolean approvalFriend(int friendRequestSeq) throws SQLException {
		return friendMapper.approvalFriend(friendRequestSeq) == 1;
	}//approvalFriend

	// 친구 신청 거절
	@Override
	public boolean rejectFriend(int friendRequestSeq) throws SQLException {
		return friendMapper.rejectFriend(friendRequestSeq) == 1;
	}//rejectFriend

	// 친구 정보 조회
	@Override
	public List<MemberEntity> findFriend(String memberId) throws SQLException {
		return friendMapper.findFriend(memberId);
	}//findFriend

	// 친구 목록 조회
	@Override
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException {
		return friendMapper.findFriendList(memberSeq);
	}//findFriendList

}//FriendServiceImpl
