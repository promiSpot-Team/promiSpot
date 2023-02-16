package com.ssafy.promispotback.member.model.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.ssafy.promispotback.member.model.entity.RequestMemberEntity;
import com.ssafy.promispotback.member.model.entity.MemberFriendEntity;
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
	public List<RequestMemberEntity> getRequestFriend(int memberSeq, int order) throws SQLException {
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

	// 친구 정보 리스트 조회 (친구 검색했을 떼 나오는 목록)
	@Override
	public List<MemberFriendEntity> findFriend(int memberSeq, String memberInfo) throws SQLException {
		List<MemberEntity> members = friendMapper.findFriend(memberSeq, memberInfo);
		List<MemberFriendEntity> memberFriends = new ArrayList<>();
		Iterator<MemberEntity> it = members.listIterator();

		while(it.hasNext()){
			MemberEntity member = it.next();
			MemberFriendEntity friend = new MemberFriendEntity(member.getMemberSeq()
					, member.getMemberId()
					, member.getMemberNick()
					, member.getMemberPhoneNum()
					, member.getMemberImgPath()
					, member.getMemberImgServerName()
					, friendMapper.isFriend(memberSeq, member.getMemberSeq())
					, friendMapper.isSend(memberSeq, member.getMemberSeq())
					, friendMapper.isReceive(memberSeq, member.getMemberSeq())
			);
			memberFriends.add(friend);
		}
		return memberFriends;
	}//findFriend

	// 친구 목록 조회
	@Override
	public List<MemberEntity> findFriendList(int memberSeq) throws SQLException {
		return friendMapper.findFriendList(memberSeq);
	}//findFriendList

}//FriendServiceImpl
