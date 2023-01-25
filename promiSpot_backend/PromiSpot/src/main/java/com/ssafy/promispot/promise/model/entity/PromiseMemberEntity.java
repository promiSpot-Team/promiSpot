package com.ssafy.promispot.promise.model.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;



@ApiModel(value = "PromiseMemberEntity : 약속참여자", description = "약속참여자 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class PromiseMemberEntity {
	
	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;
	
	@ApiModelProperty(value = "회원일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "약속장")
	private int promiseMemberIsLeader;

	public PromiseMemberEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PromiseMemberEntity(int promiseSeq, int memberSeq, int promiseMemberIsLeader) {
		super();
		this.promiseSeq = promiseSeq;
		this.memberSeq = memberSeq;
		this.promiseMemberIsLeader = promiseMemberIsLeader;
	}

	public int getPromiseSeq() {
		return promiseSeq;
	}

	public void setPromiseSeq(int promiseSeq) {
		this.promiseSeq = promiseSeq;
	}

	public int getMemberSeq() {
		return memberSeq;
	}

	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}

	public int getPromiseMemberIsLeader() {
		return promiseMemberIsLeader;
	}

	public void setPromiseMemberIsLeader(int promiseMemberIsLeader) {
		this.promiseMemberIsLeader = promiseMemberIsLeader;
	}
	
	

	@Override
	public String toString() {
		return "PromiseMemberEntity [promiseSeq=" + promiseSeq + ", memberSeq=" + memberSeq + ", promiseMemberIsLeader="
				+ promiseMemberIsLeader + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + memberSeq;
		result = prime * result + promiseMemberIsLeader;
		result = prime * result + promiseSeq;
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
		PromiseMemberEntity other = (PromiseMemberEntity) obj;
		if (memberSeq != other.memberSeq)
			return false;
		if (promiseMemberIsLeader != other.promiseMemberIsLeader)
			return false;
		if (promiseSeq != other.promiseSeq)
			return false;
		return true;
	}
	
	
	
	
	

}
