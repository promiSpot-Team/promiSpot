package com.ssafy.promispot.schedule.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@ApiModel(value = "ScheduleEntity : 스케쥴정보", description = "스케쥴에 대한 것을 저장한다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class ScheduleEntity {
	
	
	@ApiModelProperty(value = "스케쥴일련번호")
	int scheduleSeq;
	
	@ApiModelProperty(value = "약속일련번호")
	int promiseSeq;
	
	
	@ApiModelProperty(value = "장소번호")
	String placeId;
	
	
	@ApiModelProperty(value = "스케쥴순서")
	int scheduleProcedure;
	
	
	@ApiModelProperty(value = "장소완료")
	int schedulePlaceIsFinish;


	public ScheduleEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ScheduleEntity(int scheduleSeq, int promiseSeq, String placeId, int scheduleProcedure,
			int schedulePlaceIsFinish) {
		super();
		this.scheduleSeq = scheduleSeq;
		this.promiseSeq = promiseSeq;
		this.placeId = placeId;
		this.scheduleProcedure = scheduleProcedure;
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


	public int getSchedulePlaceIsFinish() {
		return schedulePlaceIsFinish;
	}


	public void setSchedulePlaceIsFinish(int schedulePlaceIsFinish) {
		this.schedulePlaceIsFinish = schedulePlaceIsFinish;
	}


	@Override
	public String toString() {
		return "ScheduleEntity [scheduleSeq=" + scheduleSeq + ", promiseSeq=" + promiseSeq + ", placeId=" + placeId
				+ ", scheduleProcedure=" + scheduleProcedure + ", schedulePlaceIsFinish=" + schedulePlaceIsFinish + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((placeId == null) ? 0 : placeId.hashCode());
		result = prime * result + promiseSeq;
		result = prime * result + schedulePlaceIsFinish;
		result = prime * result + scheduleProcedure;
		result = prime * result + scheduleSeq;
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
		ScheduleEntity other = (ScheduleEntity) obj;
		if (placeId == null) {
			if (other.placeId != null)
				return false;
		} else if (!placeId.equals(other.placeId))
			return false;
		if (promiseSeq != other.promiseSeq)
			return false;
		if (schedulePlaceIsFinish != other.schedulePlaceIsFinish)
			return false;
		if (scheduleProcedure != other.scheduleProcedure)
			return false;
		if (scheduleSeq != other.scheduleSeq)
			return false;
		return true;
	}
	
	
	
	

}
