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
	
	@ApiModelProperty(value = "약속번호")
	private int promiseSeq;
	
	@ApiModelProperty(value = "회원시퀀스")
	private int memberSeq;
	
	@ApiModelProperty(value = "약속장")
	private int promiseMemberIsLeader;

}
