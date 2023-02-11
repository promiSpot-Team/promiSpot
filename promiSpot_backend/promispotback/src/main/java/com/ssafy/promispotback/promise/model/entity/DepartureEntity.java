package com.ssafy.promispotback.promise.model.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DepartureEntity {

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "경도")
    private String departureX;

    @ApiModelProperty(value = "위도")
    private String departureY;

    public DepartureEntity() {
    }

    public DepartureEntity(int promiseSeq, int memberSeq, String departureX, String departureY) {
        this.promiseSeq = promiseSeq;
        this.memberSeq = memberSeq;
        this.departureX = departureX;
        this.departureY = departureY;
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
}
