package com.ssafy.promispot.member.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispot.member.model.entity.FriendRequestEntity;
import com.ssafy.promispot.member.model.entity.MemberEntity;

@Mapper
public interface FriendMapper {
	
	// 친구 신청
	public int requestFriend(FriendRequestEntity friendRequestEntity) throws SQLException;
	
	// 친구 신청 목록 조회 (나한테 온 친구 신청 보기)
	public List<FriendRequestEntity> getRequestFriend(@Param("memberSeq") int memberSeq
			, @Param("order") String order) throws SQLException;
	
	// 친구 신청 승인
	public int approvalFriend(int friendRequestSeq) throws SQLException;
	
	// 친구 신청 거절
	public int rejectFriend(int friendRequestSeq) throws SQLException;
	
	// 친구 정보 조회
	public MemberEntity findFriend(String memberId) throws SQLException;
	
	// 친구 목록 조회
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException;

}//FriendMapper
