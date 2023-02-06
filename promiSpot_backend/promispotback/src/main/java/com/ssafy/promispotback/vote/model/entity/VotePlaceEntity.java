package com.ssafy.promispotback.vote.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

@ApiModel(value = "VotePlaceEntity : 약속 장소 후보 정보", description = "지도위에서 모두가 볼 수 있고 투표를 할 수 있는 후보 장소 정보")
public class VotePlaceEntity {
    @ApiModelProperty(value = "약속장소후보일련번호")
    private int voteSeq;

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    @ApiModelProperty(value = "장소번호")
    private String placeId;

    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "장소경도")
    private String placeX; // 경도

    @ApiModelProperty(value = "장소위도")
    private String placeY; // 위도

    public VotePlaceEntity() {}

    public VotePlaceEntity(int voteSeq, int promiseSeq, String placeId, int memberSeq, String placeX, String placeY) {
        this.voteSeq = voteSeq;
        this.promiseSeq = promiseSeq;
        this.placeId = placeId;
        this.memberSeq = memberSeq;
        this.placeX = placeX;
        this.placeY = placeY;
    }

    public int getVoteSeq() {
        return voteSeq;
    }

    public void setVoteSeq(int voteSeq) {
        this.voteSeq = voteSeq;
    }

    public int getPromiseSeq() {
        return promiseSeq;
    }

    public void setPromiseSeq(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public int getMemberSeq() {
        return memberSeq;
    }

    public void setMemberSeq(int memberSeq) {
        this.memberSeq = memberSeq;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VotePlaceEntity that = (VotePlaceEntity) o;
        return voteSeq == that.voteSeq && promiseSeq == that.promiseSeq && memberSeq == that.memberSeq && Objects.equals(placeId, that.placeId) && Objects.equals(placeX, that.placeX) && Objects.equals(placeY, that.placeY);
    }

    @Override
    public int hashCode() {
        return Objects.hash(voteSeq, promiseSeq, placeId, memberSeq, placeX, placeY);
    }

    @Override
    public String toString() {
        return "VotePlaceEntity{" +
                "voteSeq=" + voteSeq +
                ", promiseSeq=" + promiseSeq +
                ", placeId='" + placeId + '\'' +
                ", memberSeq=" + memberSeq +
                ", placeX='" + placeX + '\'' +
                ", placeY='" + placeY + '\'' +
                '}';
    }
}//VotePlaceEntity
