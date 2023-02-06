package com.ssafy.promispotback.member.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

@ApiModel(value = "RequestMemberEntity : 친구 신청 회원 정보", description = "친구 신청 회원의 정보를 나타낸다.")
public class RequestMemberEntity {
    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "회원아이디")
    private String memberId;

    @ApiModelProperty(value = "이름")
    private String memberName;

    @ApiModelProperty(value = "닉네임")
    private String memberNick;

    @ApiModelProperty(value = "프로필 이미지 경로")
    private String memberImgPath;

    @ApiModelProperty(value = "프로필 이미지 서버 이름")
    private String memberImgServerName;

    @ApiModelProperty(value = "친구신청일련번호")
    private int friendRequestSeq;

    @ApiModelProperty(value = "신청상태 [ 0:신청 상태 1:승인 상태 ]")
    private int friendRequestIsAgree;

    public RequestMemberEntity() {}

    public RequestMemberEntity(int memberSeq, String memberId, String memberName, String memberNick, String memberImgPath, String memberImgServerName, int friendRequestSeq, int friendRequestIsAgree) {
        this.memberSeq = memberSeq;
        this.memberId = memberId;
        this.memberName = memberName;
        this.memberNick = memberNick;
        this.memberImgPath = memberImgPath;
        this.memberImgServerName = memberImgServerName;
        this.friendRequestSeq = friendRequestSeq;
        this.friendRequestIsAgree = friendRequestIsAgree;
    }

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

    public String getMemberImgPath() {
        return memberImgPath;
    }

    public void setMemberImgPath(String memberImgPath) {
        this.memberImgPath = memberImgPath;
    }

    public String getMemberImgServerName() {
        return memberImgServerName;
    }

    public void setMemberImgServerName(String memberImgServerName) {
        this.memberImgServerName = memberImgServerName;
    }

    public int getFriendRequestSeq() {
        return friendRequestSeq;
    }

    public void setFriendRequestSeq(int friendRequestSeq) {
        this.friendRequestSeq = friendRequestSeq;
    }

    public int getFriendRequestIsAgree() {
        return friendRequestIsAgree;
    }

    public void setFriendRequestIsAgree(int friendRequestIsAgree) {
        this.friendRequestIsAgree = friendRequestIsAgree;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RequestMemberEntity that = (RequestMemberEntity) o;
        return memberSeq == that.memberSeq && friendRequestSeq == that.friendRequestSeq && friendRequestIsAgree == that.friendRequestIsAgree && Objects.equals(memberId, that.memberId) && Objects.equals(memberName, that.memberName) && Objects.equals(memberNick, that.memberNick) && Objects.equals(memberImgPath, that.memberImgPath) && Objects.equals(memberImgServerName, that.memberImgServerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberSeq, memberId, memberName, memberNick, memberImgPath, memberImgServerName, friendRequestSeq, friendRequestIsAgree);
    }

    @Override
    public String toString() {
        return "RequestMemberEntity{" +
                "memberSeq=" + memberSeq +
                ", memberId='" + memberId + '\'' +
                ", memberName='" + memberName + '\'' +
                ", memberNick='" + memberNick + '\'' +
                ", memberImgPath='" + memberImgPath + '\'' +
                ", memberImgServerName='" + memberImgServerName + '\'' +
                ", friendRequestSeq=" + friendRequestSeq +
                ", friendRequestIsAgree=" + friendRequestIsAgree +
                '}';
    }
}//RequestMemberEntity
