package com.ssafy.promispotback.vote.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

@ApiModel(value = "VoteMemberEntity : 투표자", description = "투표자를 나타내는 Entity입니다")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VoteMemberEntity {
	@ApiModelProperty(value = "회원일련번호")
	private int memberSeq;
	@ApiModelProperty(value = "약속장소후보일련번호")
	private int voteSeq;

	public VoteMemberEntity() {}

	public VoteMemberEntity(int memberSeq, int voteSeq) {
		this.memberSeq = memberSeq;
		this.voteSeq = voteSeq;
	}

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
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		VoteMemberEntity that = (VoteMemberEntity) o;
		return memberSeq == that.memberSeq && voteSeq == that.voteSeq;
	}

	@Override
	public int hashCode() {
		return Objects.hash(memberSeq, voteSeq);
	}

	@Override
	public String toString() {
		return "VoteMemberEntity{" +
				"memberSeq=" + memberSeq +
				", voteSeq=" + voteSeq +
				'}';
	}
}
