package com.ssafy.promispot.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "FriendRequestEntity : 친구 신청 정보", description = "친구 신청 정보를 나타낸다. 상대방이 승인할 경우 친구가 된다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendRequestEntity {
	
	@ApiModelProperty(value = "친구신청일련번호")
	private int friendRequestSeq;
	
	@ApiModelProperty(value = "친구신청을 요청한 회원일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "친구신청을 받은 회원일련번호")
	private int friendRequestMember;
	
	@ApiModelProperty(value = "신청상태 [ 0:신청 상태 1:승인 상태 ]")
	private int friendRequestIsAgree;

	
	public int getFriendRequestSeq() {
		return friendRequestSeq;
	}

	public void setFriendRequestSeq(int friendRequestSeq) {
		this.friendRequestSeq = friendRequestSeq;
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
		return "FriendRequestEntity [friendRequestSeq=" + friendRequestSeq + ", memberSeq=" + memberSeq
				+ ", friendRequestMember=" + friendRequestMember + ", friendRequestIsAgree=" + friendRequestIsAgree
				+ "]";
	}
	
	
}//FriendRequestEntity
