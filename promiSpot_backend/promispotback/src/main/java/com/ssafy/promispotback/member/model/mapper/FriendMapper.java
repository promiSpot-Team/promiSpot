package com.ssafy.promispotback.member.model.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.promispotback.member.model.entity.RequestMemberEntity;
import com.ssafy.promispotback.member.model.entity.MemberFriendEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.promispotback.member.model.entity.FriendRequestEntity;
import com.ssafy.promispotback.member.model.entity.MemberEntity;

@Mapper
public interface FriendMapper {

	// 친구 신청
	public int requestFriend(FriendRequestEntity friendRequestEntity) throws SQLException;

	// 친구 신청 목록 조회 (나한테 온 친구 신청 보기)
	public List<RequestMemberEntity> getRequestFriend(@Param("memberSeq") int memberSeq
			, @Param("order") int order) throws SQLException;

	// 친구 신청 승인
	public int approvalFriend(int friendRequestSeq) throws SQLException;

	// 친구 신청 거절
	public int rejectFriend(int friendRequestSeq) throws SQLException;

	// 친구 정보 리스트 조회 (친구 검색했을 떼 나오는 목록)
	public List<MemberEntity> findFriend(@Param("memberSeq") int memberSeq
			, @Param("memberInfo") String memberInfo) throws SQLException;

	// 친구 목록 조회
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException;

	// 친구 확인
	public int isFriend(@Param("memberSeq") int memberSeq, @Param("friendSeq") int friendSeq) throws SQLException;

	public int isSend(@Param("memberSeq") int memberSeq, @Param("friendSeq") int friendSeq) throws SQLException;

	public int isReceive(@Param("memberSeq") int memberSeq, @Param("friendSeq") int friendSeq) throws SQLException;

}//FriendMapper
