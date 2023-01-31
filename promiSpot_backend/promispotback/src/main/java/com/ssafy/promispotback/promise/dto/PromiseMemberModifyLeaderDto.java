package com.ssafy.promispotback.promise.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "PromiseEntity : 약속", description = "약속 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class PromiseMemberModifyLeaderDto {
	
	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;
	
	@ApiModelProperty(value = "이전의 약속장")
	private int beforeMemberSeq;
	
	@ApiModelProperty(value = "이후의 약속장")
	private int afterMemberSeq;

	public PromiseMemberModifyLeaderDto(int promiseSeq, int beforeMemberSeq, int afterMemberSeq) {
		super();
		this.promiseSeq = promiseSeq;
		this.beforeMemberSeq = beforeMemberSeq;
		this.afterMemberSeq = afterMemberSeq;
	}

	
	public PromiseMemberModifyLeaderDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public int getPromiseSeq() {
		return promiseSeq;
	}

	public void setPromiseSeq(int promiseSeq) {
		this.promiseSeq = promiseSeq;
	}

	public int getBeforeMemberSeq() {
		return beforeMemberSeq;
	}

	public void setBeforeMemberSeq(int beforeMemberSeq) {
		this.beforeMemberSeq = beforeMemberSeq;
	}

	public int getAfterMemberSeq() {
		return afterMemberSeq;
	}

	public void setAfterMemberSeq(int afterMemberSeq) {
		this.afterMemberSeq = afterMemberSeq;
	}

	@Override
	public String toString() {
		return "PromiseMemberModifyLeaderDto [promiseSeq=" + promiseSeq + ", beforeMemberSeq=" + beforeMemberSeq
				+ ", afterMemberSeq=" + afterMemberSeq + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + afterMemberSeq;
		result = prime * result + beforeMemberSeq;
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
		PromiseMemberModifyLeaderDto other = (PromiseMemberModifyLeaderDto) obj;
		if (afterMemberSeq != other.afterMemberSeq)
			return false;
		if (beforeMemberSeq != other.beforeMemberSeq)
			return false;
		if (promiseSeq != other.promiseSeq)
			return false;
		return true;
	}
	
	
	
	


	
	
	
	
	
	

}
