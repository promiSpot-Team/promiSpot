package com.ssafy.promispot.member.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.promispot.member.model.entity.FriendRequestEntity;
import com.ssafy.promispot.member.model.entity.MemberEntity;

@Mapper
public interface FriendMapper {
	
	// 친구 신청
	public int requestFriend(FriendRequestEntity friendRequestEntity) throws SQLException;
	
	// 친구 신청 승인
	public int approvalFriend(int friendRequestId) throws SQLException;
	
	// 친구 신청 거절
	public int rejectFriend(int friendRequestId) throws SQLException;
	
	// 친구 정보 조회
	public MemberEntity findFriend(String memberId) throws SQLException;
	
	// 친구들 초회
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException;

}//FriendMapper
