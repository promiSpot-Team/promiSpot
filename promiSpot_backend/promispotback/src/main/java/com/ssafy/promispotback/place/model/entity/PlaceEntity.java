package com.ssafy.promispotback.place.model.entity;



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

	@ApiModelProperty(value = "장소이미지URL")
	private String placeImgUrl;

	public PlaceEntity() {
	}

	public PlaceEntity(String placeId, String placeName, String placeCategoryName, String placeCategoryGroupCode,
					   String placeCategoryGroupName, String placePhone, String placeRoadAddressName,
					   String placeAddressName, String placeX, String placeY, String placeUrl, String placeImgUrl) {
		this.placeId = placeId;
		this.placeName = placeName;
		this.placeCategoryName = placeCategoryName;
		this.placeCategoryGroupCode = placeCategoryGroupCode;
		this.placeCategoryGroupName = placeCategoryGroupName;
		this.placePhone = placePhone;
		this.placeRoadAddressName = placeRoadAddressName;
		this.placeAddressName = placeAddressName;
		this.placeX = placeX;
		this.placeY = placeY;
		this.placeUrl = placeUrl;
		this.placeImgUrl = placeImgUrl;
	}

	public String getPlaceId() {
		return placeId;
	}

	public void setPlaceId(String placeId) {
		this.placeId = placeId;
	}

	public String getPlaceName() {
		return placeName;
	}

	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}

	public String getPlaceCategoryName() {
		return placeCategoryName;
	}

	public void setPlaceCategoryName(String placeCategoryName) {
		this.placeCategoryName = placeCategoryName;
	}

	public String getPlaceCategoryGroupCode() {
		return placeCategoryGroupCode;
	}

	public void setPlaceCategoryGroupCode(String placeCategoryGroupCode) {
		this.placeCategoryGroupCode = placeCategoryGroupCode;
	}

	public String getPlaceCategoryGroupName() {
		return placeCategoryGroupName;
	}

	public void setPlaceCategoryGroupName(String placeCategoryGroupName) {
		this.placeCategoryGroupName = placeCategoryGroupName;
	}

	public String getPlacePhone() {
		return placePhone;
	}

	public void setPlacePhone(String placePhone) {
		this.placePhone = placePhone;
	}

	public String getPlaceRoadAddressName() {
		return placeRoadAddressName;
	}

	public void setPlaceRoadAddressName(String placeRoadAddressName) {
		this.placeRoadAddressName = placeRoadAddressName;
	}

	public String getPlaceAddressName() {
		return placeAddressName;
	}

	public void setPlaceAddressName(String placeAddressName) {
		this.placeAddressName = placeAddressName;
	}

	public String getPlaceX() {
		return placeX;
	}

	public void setPlaceX(String placeX) {
		this.placeX = placeX;
	}

	public String getPlaceY() {
		return placeY;
	}

	public void setPlaceY(String placeY) {
		this.placeY = placeY;
	}

	public String getPlaceUrl() {
		return placeUrl;
	}

	public void setPlaceUrl(String placeUrl) {
		this.placeUrl = placeUrl;
	}

	public String getPlaceImgUrl() {
		return placeImgUrl;
	}

	public void setPlaceImgUrl(String placeImgUrl) {
		this.placeImgUrl = placeImgUrl;
	}
}
