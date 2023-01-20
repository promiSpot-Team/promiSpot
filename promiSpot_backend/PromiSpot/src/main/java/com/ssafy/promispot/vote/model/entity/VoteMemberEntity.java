package com.ssafy.promispot.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "VoteMemberEntity : 투표자", description = "투표자를 나타내는 Entity입니다")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteMemberEntity {
	@ApiModelProperty(value = "투표자번호")
	private int voteMemberId;
	@ApiModelProperty(value = "약속번호")
	private int promiseId;
	@ApiModelProperty(value = "약속장소투표번호")
	private int voteId;
	@ApiModelProperty(value = "회원시퀀스")
	private int memberSeq;
	@ApiModelProperty(value = "장소번호")
	private String priceId;
	
	public int getVoteMemberId() {
		return voteMemberId;
	}
	public void setVoteMemberId(int voteMemberId) {
		this.voteMemberId = voteMemberId;
	}
	public int getPromiseId() {
		return promiseId;
	}
	public void setPromiseId(int promiseId) {
		this.promiseId = promiseId;
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
	public String getPriceId() {
		return priceId;
	}
	public void setPriceId(String priceId) {
		this.priceId = priceId;
	}
	@Override
	public String toString() {
		return "VoteMemberEntity [voteMemberId=" + voteMemberId + ", promiseId=" + promiseId + ", voteId=" + voteId
				+ ", memberSeq=" + memberSeq + ", priceId=" + priceId + "]";
	}
	
	
	

	

}
