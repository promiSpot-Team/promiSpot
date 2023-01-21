package com.ssafy.promispot.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "VoteEntity : 약속장소투표", description = "약속장소투표")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteEntity {
	
	@ApiModelProperty(value = "약속장소후보일련번호")
	private int voteSeq;
	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;
	@ApiModelProperty(value = "장소번호")
	private String placeId;
	@ApiModelProperty(value = "회원일렬번호")
	private int memberSeq;
	@ApiModelProperty(value = "득표수")
	private int voteCnt;
	public int getVoteSeq() {
		return voteSeq;
	}
	public void setVoteSeq(int voteSeq) {
		this.voteSeq = voteSeq;
	}
	public int getPromiseSeq() {
		return promiseSeq;
	}
	public void setPromiseSeq(int promiseSeq) {
		this.promiseSeq = promiseSeq;
	}
	public String getPlaceId() {
		return placeId;
	}
	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}
	public int getMemberSeq() {
		return memberSeq;
	}
	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}
	public int getVoteCnt() {
		return voteCnt;
	}
	public void setVoteCnt(int voteCnt) {
		this.voteCnt = voteCnt;
	}
	@Override
	public String toString() {
		return "VoteEntity [voteSeq=" + voteSeq + ", promiseSeq=" + promiseSeq + ", placeId=" + placeId + ", memberSeq="
				+ memberSeq + ", voteCnt=" + voteCnt + "]";
	}
	
	
	
}
