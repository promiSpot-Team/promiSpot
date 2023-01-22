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
	
	

}
