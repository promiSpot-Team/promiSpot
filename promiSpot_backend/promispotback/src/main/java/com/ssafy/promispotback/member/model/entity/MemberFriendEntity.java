package com.ssafy.promispotback.member.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

@ApiModel(value = "memberFriendEntity : 친구 검색 시 회원 정보", description = "회원이 친구 추가/친구 검색을 위해 검색했을 때 나타나는 정보.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberFriendEntity {
    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "회원아이디")
    private String memberId;

    @ApiModelProperty(value = "닉네임")
    private String memberNick;

    @ApiModelProperty(value = "전화번호")
    private String memberPhoneNum;

    @ApiModelProperty(value = "프로필 이미지 경로")
    private String memberImgPath;

    @ApiModelProperty(value = "프로필 이미지 서버 이름")
    private String memberImgServerName;

    @ApiModelProperty(value = "회원친구여부")
    private int isFriend;

//    public MemberFriendEntity() {}

    public MemberFriendEntity(int memberSeq, String memberId, String memberNick, String memberPhoneNum,
                              String memberImgPath, String memberImgServerName, int isFriend) {
        this.memberSeq = memberSeq;
        this.memberId = memberId;
        this.memberNick = memberNick;
        this.memberPhoneNum = memberPhoneNum;
        this.memberImgPath = memberImgPath;
        this.memberImgServerName = memberImgServerName;
        this.isFriend = isFriend;
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

    public String getMemberNick() {
        return memberNick;
    }

    public void setMemberNick(String memberNick) {
        this.memberNick = memberNick;
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

    public String getMemberImgServerName() {
        return memberImgServerName;
    }

    public void setMemberImgServerName(String memberImgServerName) {
        this.memberImgServerName = memberImgServerName;
    }

    public int getIsFriend() {
        return isFriend;
    }

    public void setIsFriend(int isFriend) {
        this.isFriend = isFriend;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MemberFriendEntity that = (MemberFriendEntity) o;
        return memberSeq == that.memberSeq && isFriend == that.isFriend && Objects.equals(memberId, that.memberId) && Objects.equals(memberNick, that.memberNick) && Objects.equals(memberPhoneNum, that.memberPhoneNum) && Objects.equals(memberImgPath, that.memberImgPath) && Objects.equals(memberImgServerName, that.memberImgServerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberSeq, memberId, memberNick, memberPhoneNum, memberImgPath, memberImgServerName, isFriend);
    }

    @Override
    public String toString() {
        return "memberFriendEntity{" +
                "memberSeq=" + memberSeq +
                ", memberId='" + memberId + '\'' +
                ", memberNick='" + memberNick + '\'' +
                ", memberPhoneNum='" + memberPhoneNum + '\'' +
                ", memberImgPath='" + memberImgPath + '\'' +
                ", memberImgServerName='" + memberImgServerName + '\'' +
                ", isFriend=" + isFriend +
                '}';
    }
}//memberFriendEntity
