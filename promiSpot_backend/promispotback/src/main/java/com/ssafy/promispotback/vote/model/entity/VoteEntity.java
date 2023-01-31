package com.ssafy.promispotback.vote.model.entity;

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
	
	public VoteEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public VoteEntity(int voteSeq, int promiseSeq, String placeId, int memberSeq, int voteCnt) {
		super();
		this.voteSeq = voteSeq;
		this.promiseSeq = promiseSeq;
		this.placeId = placeId;
		this.memberSeq = memberSeq;
		this.voteCnt = voteCnt;
	}

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
	
	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + memberSeq;
		result = prime * result + ((placeId == null) ? 0 : placeId.hashCode());
		result = prime * result + promiseSeq;
		result = prime * result + voteCnt;
		result = prime * result + voteSeq;
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
		VoteEntity other = (VoteEntity) obj;
		if (memberSeq != other.memberSeq)
			return false;
		if (placeId == null) {
			if (other.placeId != null)
				return false;
		} else if (!placeId.equals(other.placeId))
			return false;
		if (promiseSeq != other.promiseSeq)
			return false;
		if (voteCnt != other.voteCnt)
			return false;
		if (voteSeq != other.voteSeq)
			return false;
		return true;
	}
	
	
	
	
	
	
}
