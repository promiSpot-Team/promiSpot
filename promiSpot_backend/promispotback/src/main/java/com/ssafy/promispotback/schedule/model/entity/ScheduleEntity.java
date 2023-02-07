package com.ssafy.promispotback.schedule.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "ScheduleEntity : 스케쥴정보", description = "스케쥴에 대한 것을 저장한다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class ScheduleEntity {


	@ApiModelProperty(value = "스케쥴일련번호")
	private int scheduleSeq;

	@ApiModelProperty(value = "약속일련번호")
	private int promiseSeq;


	@ApiModelProperty(value = "장소번호")
	private String placeId;


	@ApiModelProperty(value = "스케쥴순서")
	private int scheduleProcedure;

	@ApiModelProperty(value = "스케쥴시간")
	private String scheduleTime;


	@ApiModelProperty(value = "장소완료")
	private int schedulePlaceIsFinish;


	public ScheduleEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ScheduleEntity(int scheduleSeq, int promiseSeq, String placeId, int scheduleProcedure, String scheduleTime, int schedulePlaceIsFinish) {
		this.scheduleSeq = scheduleSeq;
		this.promiseSeq = promiseSeq;
		this.placeId = placeId;
		this.scheduleProcedure = scheduleProcedure;
		this.scheduleTime = scheduleTime;
		this.schedulePlaceIsFinish = schedulePlaceIsFinish;
	}

	public int getScheduleSeq() {
		return scheduleSeq;
	}

	public void setScheduleSeq(int scheduleSeq) {
		this.scheduleSeq = scheduleSeq;
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

	public int getScheduleProcedure() {
		return scheduleProcedure;
	}

	public void setScheduleProcedure(int scheduleProcedure) {
		this.scheduleProcedure = scheduleProcedure;
	}

	public String getScheduleTime() {
		return scheduleTime;
	}

	public void setScheduleTime(String scheduleTime) {
		this.scheduleTime = scheduleTime;
	}

	public int getSchedulePlaceIsFinish() {
		return schedulePlaceIsFinish;
	}

	public void setSchedulePlaceIsFinish(int schedulePlaceIsFinish) {
		this.schedulePlaceIsFinish = schedulePlaceIsFinish;
	}

	@Override
	public String toString() {
		return "ScheduleEntity{" +
				"scheduleSeq=" + scheduleSeq +
				", promiseSeq=" + promiseSeq +
				", placeId='" + placeId + '\'' +
				", scheduleProcedure=" + scheduleProcedure +
				", scheduleTime='" + scheduleTime + '\'' +
				", schedulePlaceIsFinish=" + schedulePlaceIsFinish +
				'}';
	}


}
