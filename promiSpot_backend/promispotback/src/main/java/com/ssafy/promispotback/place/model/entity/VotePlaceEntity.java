package com.ssafy.promispotback.place.model.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;

@ApiModel(value = "VotePlaceEntity : 후보 장소", description = "후보 장소를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class VotePlaceEntity extends PlaceEntity{

    @ApiModelProperty(value = "후보 장소 일련번호")
    private int voteSeq;

    @ApiModelProperty(value = "약속 일련번호")
    private int promiseSeq;

    @ApiModelProperty(value = "장소를 등록한 회원 일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "후보 장소 득표수")
    private int voteCnt;

    public VotePlaceEntity() { }

    public VotePlaceEntity(String placeId, String placeName, String placeCategoryName, String placeCategoryGroupCode,
                           String placeCategoryGroupName, String placePhone, String placeRoadAddressName,
                           String placeAddressName, String placeX, String placeY, String placeUrl, int voteSeq,
                           int promiseSeq, int memberSeq, int voteCnt) {
        super(placeId, placeName, placeCategoryName, placeCategoryGroupCode, placeCategoryGroupName, placePhone,
                placeRoadAddressName, placeAddressName, placeX, placeY, placeUrl);
        this.voteSeq = voteSeq;
        this.promiseSeq = promiseSeq;
        this.memberSeq = memberSeq;
        this.voteCnt = voteCnt;
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

    public int getMemberSeq() {
        return memberSeq;
    }

    public void setMemberSeq(int memberSeq) {
        this.memberSeq = memberSeq;
    }

    public int getVoteCnt() {
        return voteCnt;
    }

    public void setVoteCnt(int voteCnt) {
        this.voteCnt = voteCnt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        VotePlaceEntity that = (VotePlaceEntity) o;
        return voteSeq == that.voteSeq && promiseSeq == that.promiseSeq && memberSeq == that.memberSeq && voteCnt == that.voteCnt;
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), voteSeq, promiseSeq, memberSeq, voteCnt);
    }

    @Override
    public String toString() {
        return "VotePlaceEntity{" +
                "voteSeq=" + voteSeq +
                ", promiseSeq=" + promiseSeq +
                ", memberSeq=" + memberSeq +
                ", voteCnt=" + voteCnt +
                ", placeId= " + getPlaceId() +
                '}';
    }
}//VotePlaceEntity
