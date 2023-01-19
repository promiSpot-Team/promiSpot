package com.ssafy.promispot.place.model.entity;



import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

@ApiModel(value = "PlaceEntity : 장소정보", description = "장소에 대한 것을 저장한다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class PlaceEntity {
	
	
	
	@ApiModelProperty(value = "장소번호")
	private String placeId;
	
	@ApiModelProperty(value = "장소명")
	private String placeName;
	
	@ApiModelProperty(value = "장소카테고리이름")
	private String placeCategoryName;
	
	@ApiModelProperty(value = "장소그룹코드")
	private String placeCategoryGroupCode;
	
	@ApiModelProperty(value = "정소그룹카테고리이름")
	private String placeCategoryGroupName;
	
	@ApiModelProperty(value = "장소전화번호")
	private String placePhone;
	
	@ApiModelProperty(value = "장소전체도로명주소")
	private String placeRoadAddressName;
	
	@ApiModelProperty(value = "장소전체지번주소")
	private String placeAddressName;
	
	@ApiModelProperty(value = "장소경도")
	private String placeX; // 경도
	
	@ApiModelProperty(value = "장소위도")
	private String placeY; // 위도 
	
	@ApiModelProperty(value = "장소상세페이지")
	private String placeUrl;
	

	
	
	
}
