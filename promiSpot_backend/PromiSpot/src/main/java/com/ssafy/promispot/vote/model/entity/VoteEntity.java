package com.ssafy.promispot.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "VoteEntity : 약속장소투표", description = "약속장소투표")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteEntity {
	
	@ApiModelProperty(value = "약속장소투표번호")
	private int voteId;
	@ApiModelProperty(value = "약속번호")
	private int promiseId;
	@ApiModelProperty(value = "장소번호")
	private String placeId;
	@ApiModelProperty(value = "회원시퀀스")
	private int memberSeq;
	@ApiModelProperty(value = "등수")
	private int voteRank;
	@ApiModelProperty(value = "득표수")
	private int voteCnt;
	public int getVoteId() {
		return voteId;
	}
	public void setVoteId(int voteId) {
		this.voteId = voteId;
	}
	public int getPromiseId() {
		return promiseId;
	}
	public void setPromiseId(int promiseId) {
		this.promiseId = promiseId;
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
	public int getVoteRank() {
		return voteRank;
	}
	public void setVoteRank(int voteRank) {
		this.voteRank = voteRank;
	}
	public int getVoteCnt() {
		return voteCnt;
	}
	public void setVoteCnt(int voteCnt) {
		this.voteCnt = voteCnt;
	}
	
	@Override
	public String toString() {
		return "VoteEntity [voteId=" + voteId + ", promiseId=" + promiseId + ", placeId=" + placeId + ", memberSeq="
				+ memberSeq + ", voteRank=" + voteRank + ", voteCnt=" + voteCnt + "]";
	}
	
}
