package com.ssafy.promispot.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "VoteMemberEntity : 투표자", description = "투표자를 나타내는 Entity입니다")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteMemberEntity {
	@ApiModelProperty(value = "회원일련번호")
	private int memberSeq;
	@ApiModelProperty(value = "약속번호")
	private int voteSeq;
	
	public int getMemberSeq() {
		return memberSeq;
	}
	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}
	public int getVoteSeq() {
		return voteSeq;
	}
	public void setVoteSeq(int voteSeq) {
		this.voteSeq = voteSeq;
	}
	@Override
	public String toString() {
		return "VoteMemberEntity [memberSeq=" + memberSeq + ", voteSeq=" + voteSeq + "]";
	}
	
	
	
	
	
	

	

}
