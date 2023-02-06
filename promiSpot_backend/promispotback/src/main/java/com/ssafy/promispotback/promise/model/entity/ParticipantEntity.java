package com.ssafy.promispotback.promise.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

// 약속 참여자 + 멤버
@ApiModel(value = "ParticipantEntity : 약속참여자 member 정보", description = "약속참여자 상세 정보를 나타낸다.")
public class ParticipantEntity {

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

    @ApiModelProperty(value = "약속장")
    private int promiseMemberIsLeader;

    public ParticipantEntity() {
    }

    public ParticipantEntity(int memberSeq, String memberId, String memberName, String memberNick,
                             String memberImgPath, String memberImgServerName, int promiseMemberIsLeader) {
        this.memberSeq = memberSeq;
        this.memberId = memberId;
        this.memberName = memberName;
        this.memberNick = memberNick;
        this.memberImgPath = memberImgPath;
        this.memberImgServerName = memberImgServerName;
        this.promiseMemberIsLeader = promiseMemberIsLeader;
    }

    public int getMemberSeq() {
        return memberSeq;
    }

    public String getMemberId() {
        return memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public String getMemberNick() {
        return memberNick;
    }

    public String getMemberImgPath() {
        return memberImgPath;
    }

    public String getMemberImgServerName() {
        return memberImgServerName;
    }

    public int getPromiseMemberIsLeader() {
        return promiseMemberIsLeader;
    }

    public void setMemberSeq(int memberSeq) {
        this.memberSeq = memberSeq;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public void setMemberNick(String memberNick) {
        this.memberNick = memberNick;
    }

    public void setMemberImgPath(String memberImgPath) {
        this.memberImgPath = memberImgPath;
    }

    public void setMemberImgServerName(String memberImgServerName) {
        this.memberImgServerName = memberImgServerName;
    }

    public void setPromiseMemberIsLeader(int promiseMemberIsLeader) {
        this.promiseMemberIsLeader = promiseMemberIsLeader;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParticipantEntity that = (ParticipantEntity) o;
        return memberSeq == that.memberSeq && promiseMemberIsLeader == that.promiseMemberIsLeader && Objects.equals(memberId, that.memberId) && Objects.equals(memberName, that.memberName) && Objects.equals(memberNick, that.memberNick) && Objects.equals(memberImgPath, that.memberImgPath) && Objects.equals(memberImgServerName, that.memberImgServerName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberSeq, memberId, memberName, memberNick, memberImgPath, memberImgServerName, promiseMemberIsLeader);
    }

    @Override
    public String toString() {
        return "ParticipantEntity{" +
                "memberSeq=" + memberSeq +
                ", memberId='" + memberId + '\'' +
                ", memberName='" + memberName + '\'' +
                ", memberNick='" + memberNick + '\'' +
                ", memberImgPath='" + memberImgPath + '\'' +
                ", memberImgServerName='" + memberImgServerName + '\'' +
                ", promiseMemberIsLeader=" + promiseMemberIsLeader +
                '}';
    }
}//ParticipantEntity
