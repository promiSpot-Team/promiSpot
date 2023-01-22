package com.ssafy.promispot.promise.model.entity;

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

}
