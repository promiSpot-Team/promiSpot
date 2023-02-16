package com.ssafy.promispotback.promise.model.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DepartureEntity {

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "이름")
    private String memberName;

    @ApiModelProperty(value = "경도")
    private String departureX;

    @ApiModelProperty(value = "위도")
    private String departureY;

    @ApiModelProperty(value = "프로필 이미지 경로")
    private String memberImgPath;

    public DepartureEntity() {
    }

    public DepartureEntity(int promiseSeq, int memberSeq, String memberName, String departureX, String departureY, String memberImgPath) {
        this.promiseSeq = promiseSeq;
        this.memberSeq = memberSeq;
        this.memberName = memberName;
        this.departureX = departureX;
        this.departureY = departureY;
        this.memberImgPath = memberImgPath;
    }

    public int getPromiseSeq() {
        return promiseSeq;
    }

    public void setPromiseSeq(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }

    public int getMemberSeq() {
        return memberSeq;
    }

    public void setMemberSeq(int memberSeq) {
        this.memberSeq = memberSeq;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getDepartureX() {
        return departureX;
    }

    public void setDepartureX(String departureX) {
        this.departureX = departureX;
    }

    public String getDepartureY() {
        return departureY;
    }

    public void setDepartureY(String departureY) {
        this.departureY = departureY;
    }

    public String getMemberImgPath() {
        return memberImgPath;
    }

    public void setMemberImgPath(String memberImgPath) {
        this.memberImgPath = memberImgPath;
    }
}
