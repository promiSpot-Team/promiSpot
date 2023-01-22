package com.ssafy.promispot.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "FriendApprovalEntity : 친구 승인 정보", description = "친구신청에 승인하여 친구가 된 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendApprovalEntity {
	
	@ApiModelProperty(value = "친구승인 일련번호")
	private int friendApprovalSeq;
	
	@ApiModelProperty(value = "친구신청을 요청한 회원일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "친구신청을 받은 회원일련번호")
	private int friendRequestMember;

	public int getFriendApprovalSeq() {
		return friendApprovalSeq;
	}

	public void setFriendApprovalSeq(int friendApprovalSeq) {
		this.friendApprovalSeq = friendApprovalSeq;
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

	@Override
	public String toString() {
		return "FriendApprovalEntity [friendApprovalSeq=" + friendApprovalSeq + ", memberSeq=" + memberSeq
				+ ", friendRequestMember=" + friendRequestMember + "]";
	}

	

}//FriendApprovalEntity
