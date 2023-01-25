package com.ssafy.promispot.place.model.entity;



import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.Getter;

@ApiModel(value = "PlaceEntity : 장소정보", description = "장소에 대한 것을 저장한다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
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

	public PlaceEntity() {
		super();
	}

	
	public PlaceEntity(String placeId, String placeName, String placeCategoryName, String placeCategoryGroupCode,
			String placeCategoryGroupName, String placePhone, String placeRoadAddressName, String placeAddressName,
			String placeX, String placeY, String placeUrl) {
		super();
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


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PlaceEntity other = (PlaceEntity) obj;
		if (placeAddressName == null) {
			if (other.placeAddressName != null)
				return false;
		} else if (!placeAddressName.equals(other.placeAddressName))
			return false;
		if (placeCategoryGroupCode == null) {
			if (other.placeCategoryGroupCode != null)
				return false;
		} else if (!placeCategoryGroupCode.equals(other.placeCategoryGroupCode))
			return false;
		if (placeCategoryGroupName == null) {
			if (other.placeCategoryGroupName != null)
				return false;
		} else if (!placeCategoryGroupName.equals(other.placeCategoryGroupName))
			return false;
		if (placeCategoryName == null) {
			if (other.placeCategoryName != null)
				return false;
		} else if (!placeCategoryName.equals(other.placeCategoryName))
			return false;
		if (placeId == null) {
			if (other.placeId != null)
				return false;
		} else if (!placeId.equals(other.placeId))
			return false;
		if (placeName == null) {
			if (other.placeName != null)
				return false;
		} else if (!placeName.equals(other.placeName))
			return false;
		if (placePhone == null) {
			if (other.placePhone != null)
				return false;
		} else if (!placePhone.equals(other.placePhone))
			return false;
		if (placeRoadAddressName == null) {
			if (other.placeRoadAddressName != null)
				return false;
		} else if (!placeRoadAddressName.equals(other.placeRoadAddressName))
			return false;
		if (placeUrl == null) {
			if (other.placeUrl != null)
				return false;
		} else if (!placeUrl.equals(other.placeUrl))
			return false;
		if (placeX == null) {
			if (other.placeX != null)
				return false;
		} else if (!placeX.equals(other.placeX))
			return false;
		if (placeY == null) {
			if (other.placeY != null)
				return false;
		} else if (!placeY.equals(other.placeY))
			return false;
		return true;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((placeAddressName == null) ? 0 : placeAddressName.hashCode());
		result = prime * result + ((placeCategoryGroupCode == null) ? 0 : placeCategoryGroupCode.hashCode());
		result = prime * result + ((placeCategoryGroupName == null) ? 0 : placeCategoryGroupName.hashCode());
		result = prime * result + ((placeCategoryName == null) ? 0 : placeCategoryName.hashCode());
		result = prime * result + ((placeId == null) ? 0 : placeId.hashCode());
		result = prime * result + ((placeName == null) ? 0 : placeName.hashCode());
		result = prime * result + ((placePhone == null) ? 0 : placePhone.hashCode());
		result = prime * result + ((placeRoadAddressName == null) ? 0 : placeRoadAddressName.hashCode());
		result = prime * result + ((placeUrl == null) ? 0 : placeUrl.hashCode());
		result = prime * result + ((placeX == null) ? 0 : placeX.hashCode());
		result = prime * result + ((placeY == null) ? 0 : placeY.hashCode());
		return result;
	}


	@Override
	public String toString() {
		return "PlaceEntity [placeId=" + placeId + ", placeName=" + placeName + ", placeCategoryName="
				+ placeCategoryName + ", placeCategoryGroupCode=" + placeCategoryGroupCode + ", placeCategoryGroupName="
				+ placeCategoryGroupName + ", placePhone=" + placePhone + ", placeRoadAddressName="
				+ placeRoadAddressName + ", placeAddressName=" + placeAddressName + ", placeX=" + placeX + ", placeY="
				+ placeY + ", placeUrl=" + placeUrl + "]";
	}
	
	
	
}
