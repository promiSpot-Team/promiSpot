package com.ssafy.promispot.address.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "AddressEntity : 회원 주소 정보", description = "회원의 주소를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddressEntity {
	
	@ApiModelProperty(value = "주소 일련번호")
	private int addressSeq;
	
	@ApiModelProperty(value = "회원 일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "주소")
	private String addressAddress;
	
	@ApiModelProperty(value = "주소지별칭")
	private String addressNick;
	
	@ApiModelProperty(value = "경도")
	private String addressX;
	
	@ApiModelProperty(value = "위도")
	private String addressY;
	
	@ApiModelProperty(value = "대표 주소 상태")
	private int addressIsPrimary;

	public int getAddressSeq() {
		return addressSeq;
	}

	public void setAddressSeq(int addressSeq) {
		this.addressSeq = addressSeq;
	}

	public int getMemberSeq() {
		return memberSeq;
	}

	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}

	public String getAddressAdress() {
		return addressAddress;
	}

	public void setAddressAdress(String addressAdress) {
		this.addressAddress = addressAdress;
	}

	public String getAddressNick() {
		return addressNick;
	}

	public void setAddressNick(String addressNick) {
		this.addressNick = addressNick;
	}

	public String getAddressX() {
		return addressX;
	}

	public void setAddressX(String addressX) {
		this.addressX = addressX;
	}

	public String getAddressY() {
		return addressY;
	}

	public void setAddressY(String addressY) {
		this.addressY = addressY;
	}

	public int getAddressIsPrimary() {
		return addressIsPrimary;
	}

	public void setAddressIsPrimary(int addressIsPrimary) {
		this.addressIsPrimary = addressIsPrimary;
	}

	@Override
	public String toString() {
		return "AddressEntity [addressSeq=" + addressSeq + ", memberSeq=" + memberSeq + ", addressAdress="
				+ addressAddress + ", addressNick=" + addressNick + ", addressX=" + addressX + ", addressY=" + addressY
				+ ", addressIsPrimary=" + addressIsPrimary + "]";
	}

	
}//AddressEntity
