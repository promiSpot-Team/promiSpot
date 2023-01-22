package com.ssafy.promispot.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "MemberEntity : 회원 정보", description = "회원의 상세 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberEntity {
	
	@ApiModelProperty(value = "회원일련번호")
	private int memberSeq;
	
	@ApiModelProperty(value = "회원아이디")
	private String memberId;
	
	@ApiModelProperty(value = "비밀번호")
	private String memberPass;
	
	@ApiModelProperty(value = "아룸")
	private String memberName;
	
	@ApiModelProperty(value = "닉네임")
	private String memberNick;
	
	@ApiModelProperty(value = "이메일")
	private String memberEmail;
	
	@ApiModelProperty(value = "전화번호")
	private String memberPhoneNum;
	
	@ApiModelProperty(value = "프로필 이미지 경로")
	private String memberImgPath;
	
	@ApiModelProperty(value = "프로필 이미지 원본 이름")
	private String memberImgOriginName;
	
	@ApiModelProperty(value = "프로필 이미지 서버 이름")
	private String memberImgServerName;
	
	@ApiModelProperty(value = "내 주소 활용 동의")
	private int memberAddressIsAgree;

	public int getMemberSeq() {
		return memberSeq;
	}

	public void setMemberSeq(int memberSeq) {
		this.memberSeq = memberSeq;
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getMemberPass() {
		return memberPass;
	}

	public void setMemberPass(String memberPass) {
		this.memberPass = memberPass;
	}

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public String getMemberNick() {
		return memberNick;
	}

	public void setMemberNick(String memberNick) {
		this.memberNick = memberNick;
	}

	public String getMemberEmail() {
		return memberEmail;
	}

	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}

	public String getMemberPhoneNum() {
		return memberPhoneNum;
	}

	public void setMemberPhoneNum(String memberPhoneNum) {
		this.memberPhoneNum = memberPhoneNum;
	}

	public String getMemberImgPath() {
		return memberImgPath;
	}

	public void setMemberImgPath(String memberImgPath) {
		this.memberImgPath = memberImgPath;
	}

	public String getMemberImgOriginName() {
		return memberImgOriginName;
	}

	public void setMemberImgOriginName(String memberImgOriginName) {
		this.memberImgOriginName = memberImgOriginName;
	}

	public String getMemberImgServerName() {
		return memberImgServerName;
	}

	public void setMemberImgServerName(String memberImgServerName) {
		this.memberImgServerName = memberImgServerName;
	}

	public int getMemberAddressIsAgree() {
		return memberAddressIsAgree;
	}

	public void setMemberAddressIsAgree(int memberAddressIsAgree) {
		this.memberAddressIsAgree = memberAddressIsAgree;
	}

	@Override
	public String toString() {
		return "MemberEntity [memberSeq=" + memberSeq + ", memberId=" + memberId + ", memberPass=" + memberPass
				+ ", memberName=" + memberName + ", memberNick=" + memberNick + ", memberEmail=" + memberEmail
				+ ", memberPhoneNum=" + memberPhoneNum + ", memberImgPath=" + memberImgPath + ", memberImgOriginName="
				+ memberImgOriginName + ", memberImgServerName=" + memberImgServerName + ", memberAddressIsAgree="
				+ memberAddressIsAgree + "]";
	}

	
}//MemberEntity
