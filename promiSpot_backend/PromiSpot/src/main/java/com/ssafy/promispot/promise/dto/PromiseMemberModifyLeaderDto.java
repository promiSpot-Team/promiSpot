package com.ssafy.promispot.promise.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.ssafy.promispot.promise.model.entity.PromiseEntity;

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
	
	

}
