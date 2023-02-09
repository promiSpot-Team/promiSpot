package com.ssafy.promispotback.promise.model.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "PromiseEntity : 약속", description = "약속 정보를 나타낸다.")
public class PromiseEntity {

	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;

	@ApiModelProperty(value = "약속제목")
	private String promiseTitle;

	@ApiModelProperty(value = "약속장")
	private int promiseLeader;

	@ApiModelProperty(value = "약속날짜")
	private String promiseDate;

	@ApiModelProperty(value = "약속시간")
	private String promiseTime;

	@ApiModelProperty(value = "약속요일")
	private String promiseDay;

	@ApiModelProperty(value = "약속투표완료")
	private int promiseVoteIsFinish;

	@ApiModelProperty(value = "스케쥴완료")
	private int promiseScheduleIsFinish;

	public PromiseEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PromiseEntity(int promiseSeq, String promiseTitle, int promiseLeader, String promiseDate,
						 String promiseTime, String promiseDay,
						 int promiseVoteIsFinish, int promiseScheduleIsFinish) {
		this.promiseSeq = promiseSeq;
		this.promiseTitle = promiseTitle;
		this.promiseLeader = promiseLeader;
		this.promiseDate = promiseDate;
		this.promiseTime = promiseTime;
		this.promiseDay = promiseDay;
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

	public int getPromiseLeader() {
		return promiseLeader;
	}

	public void setPromiseLeader(int promiseLeader) {
		this.promiseLeader = promiseLeader;
	}

	public String getPromiseDate() {
		return promiseDate;
	}

	public void setPromiseDate(String promiseDate) {
		this.promiseDate = promiseDate;
	}

	public String getPromiseTime() {
		return promiseTime;
	}

	public void setPromiseTime(String promiseTime) {
		this.promiseTime = promiseTime;
	}

	public String getPromiseDay() {
		return promiseDay;
	}

	public void setPromiseDay(String promiseDay) {
		this.promiseDay = promiseDay;
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
}
