package com.ssafy.promispot.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "VoteMemberEntity : 투표자", description = "투표자를 나타내는 Entity입니다")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteMemberEntity {
	@ApiModelProperty(value = "투표자번호")
	private int voteMemberId;
	@ApiModelProperty(value = "약속참여자번호")
	private int promiseMemberId;
	@ApiModelProperty(value = "약속장소투표번호")
	private int voteId;
	@ApiModelProperty(value = "회원시퀀스")
	private int memberSeq;
	
	public int getVoteMemberId() {
		return voteMemberId;
	}
	public void setVoteMemberId(int voteMemberId) {
		this.voteMemberId = voteMemberId;
	}
	public int getPromiseMemberId() {
		return promiseMemberId;
	}
	public void setPromiseMemberId(int promiseMemberId) {
		this.promiseMemberId = promiseMemberId;
	}
	public int getVoteId() {
		return voteId;
	}
	public void setVoteId(int voteId) {
		this.voteId = voteId;
	}
	public int getMemberSeq() {
		return memberSeq;
	}
	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}
	@Override
	public String toString() {
		return "VoteMemberEntity [voteMemberId=" + voteMemberId + ", promiseMemberId=" + promiseMemberId + ", voteId="
				+ voteId + ", memberSeq=" + memberSeq + "]";
	}
	
	

}
