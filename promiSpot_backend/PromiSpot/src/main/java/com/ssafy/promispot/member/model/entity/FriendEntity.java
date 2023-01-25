package com.ssafy.promispot.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "FriendEntity : 친구 정보", description = "친구신청에 승인하여 친구가 된 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendEntity {
	
	@ApiModelProperty(value = "친구신청을 요청한 회원일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "친구신청을 받은 회원일련번호")
	private int friendRequestMember;

	
	
	public FriendEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public FriendEntity(int memberSeq, int friendRequestMember) {
		super();
		this.memberSeq = memberSeq;
		this.friendRequestMember = friendRequestMember;
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
		return "FriendEntity [memberSeq=" + memberSeq + ", friendRequestMember=" + friendRequestMember + "]";
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + friendRequestMember;
		result = prime * result + memberSeq;
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FriendEntity other = (FriendEntity) obj;
		if (friendRequestMember != other.friendRequestMember)
			return false;
		if (memberSeq != other.memberSeq)
			return false;
		return true;
	}
	
	
		

}//FriendEntity
