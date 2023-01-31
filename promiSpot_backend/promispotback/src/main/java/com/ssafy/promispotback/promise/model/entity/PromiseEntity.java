package com.ssafy.promispotback.promise.model.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "PromiseEntity : 약속", description = "약속 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class PromiseEntity {
	
	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;
	
	@ApiModelProperty(value = "약속제목")
	private String promiseTitle;
	
	@ApiModelProperty(value = "약속날짜")
	private Date promiseDate;
	
	@ApiModelProperty(value = "약속투표완료")
	private int promiseVoteIsFinish;
	
	@ApiModelProperty(value = "스케쥴완료")
	private int promiseScheduleIsFinish;

	public PromiseEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PromiseEntity(int promiseSeq, String promiseTitle, Date promiseDate, int promiseVoteIsFinish,
			int promiseScheduleIsFinish) {
		super();
		this.promiseSeq = promiseSeq;
		this.promiseTitle = promiseTitle;
		this.promiseDate = promiseDate;
		this.promiseVoteIsFinish = promiseVoteIsFinish;
		this.promiseScheduleIsFinish = promiseScheduleIsFinish;
	}

	public int getPromiseSeq() {
		return promiseSeq;
	}

	public void setPromiseSeq(int promiseSeq) {
		this.promiseSeq = promiseSeq;
	}

	public String getPromiseTitle() {
		return promiseTitle;
	}

	public void setPromiseTitle(String promiseTitle) {
		this.promiseTitle = promiseTitle;
	}

	public Date getPromiseDate() {
		return promiseDate;
	}

	public void setPromiseDate(Date promiseDate) {
		this.promiseDate = promiseDate;
	}

	public int getPromiseVoteIsFinish() {
		return promiseVoteIsFinish;
	}

	public void setPromiseVoteIsFinish(int promiseVoteIsFinish) {
		this.promiseVoteIsFinish = promiseVoteIsFinish;
	}

	public int getPromiseScheduleIsFinish() {
		return promiseScheduleIsFinish;
	}

	public void setPromiseScheduleIsFinish(int promiseScheduleIsFinish) {
		this.promiseScheduleIsFinish = promiseScheduleIsFinish;
	}

	@Override
	public String toString() {
		return "PromiseEntity [promiseSeq=" + promiseSeq + ", promiseTitle=" + promiseTitle + ", promiseDate="
				+ promiseDate + ", promiseVoteIsFinish=" + promiseVoteIsFinish + ", promiseScheduleIsFinish="
				+ promiseScheduleIsFinish + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((promiseDate == null) ? 0 : promiseDate.hashCode());
		result = prime * result + promiseScheduleIsFinish;
		result = prime * result + promiseSeq;
		result = prime * result + ((promiseTitle == null) ? 0 : promiseTitle.hashCode());
		result = prime * result + promiseVoteIsFinish;
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
		PromiseEntity other = (PromiseEntity) obj;
		if (promiseDate == null) {
			if (other.promiseDate != null)
				return false;
		} else if (!promiseDate.equals(other.promiseDate))
			return false;
		if (promiseScheduleIsFinish != other.promiseScheduleIsFinish)
			return false;
		if (promiseSeq != other.promiseSeq)
			return false;
		if (promiseTitle == null) {
			if (other.promiseTitle != null)
				return false;
		} else if (!promiseTitle.equals(other.promiseTitle))
			return false;
		if (promiseVoteIsFinish != other.promiseVoteIsFinish)
			return false;
		return true;
	}
	
	
	
	
	
	
	

	
	
	
	
}
