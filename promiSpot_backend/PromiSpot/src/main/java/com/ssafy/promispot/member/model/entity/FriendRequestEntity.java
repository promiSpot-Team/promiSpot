package com.ssafy.promispot.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "FriendRequestEntity : 친구 신청 정보", description = "친구 신청 정보를 나타낸다. 상대방이 승인할 경우 친구가 된다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendRequestEntity {
	
	@ApiModelProperty(value = "친구신청시퀀스")
	private int friendRequestId;
	
	@ApiModelProperty(value = "친구신청을 요청한 회원시퀀스")
	private int memberSeq;
	
	@ApiModelProperty(value = "친구신청을 받은 회원시퀀스")
	private int friendRequestMember;
	
	@ApiModelProperty(value = "신청상태 [ 0:신청 상태 1:승인 상태 ]")
	private int friendRequestIsAgree;

	public int getFriendRequestId() {
		return friendRequestId;
	}

	public void setFriendRequestId(int friendRequestId) {
		this.friendRequestId = friendRequestId;
	}

	public int getMemberSeq() {
		return memberSeq;
	}

	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}

	public int getFriendRequestMember() {
		return friendRequestMember;
	}

	public void setFriendRequestMember(int friendRequestMember) {
		this.friendRequestMember = friendRequestMember;
	}

	public int getFriendRequestIsAgree() {
		return friendRequestIsAgree;
	}

	public void setFriendRequestIsAgree(int friendRequestIsAgree) {
		this.friendRequestIsAgree = friendRequestIsAgree;
	}

	@Override
	public String toString() {
		return "FriendRequestEntity [friendRequestId=" + friendRequestId + ", memberSeq=" + memberSeq
				+ ", friendRequestMember=" + friendRequestMember + ", friendRequestIsAgree=" + friendRequestIsAgree
				+ "]";
	}

	
	
}//FriendRequestEntity
