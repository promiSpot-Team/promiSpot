package com.ssafy.promispotback.vote.model.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Objects;

// 약속장소후보 votes 와 장소 places 를 합칩 엔티티

@ApiModel(value = "VotePlaceEntity : 약속 장소 후보 정보", description = "지도위에서 모두가 볼 수 있고 투표를 할 수 있는 후보 장소 정보")
@Data
public class VotePlaceEntity {
    @ApiModelProperty(value = "약속장소후보일련번호")
    private int voteSeq;

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    @ApiModelProperty(value = "회원일련번호")
    private int memberSeq;

    @ApiModelProperty(value = "득표수")
    private int voteCnt;

    // 여기서부터는 place의 정보를 가저온다.

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

    @ApiModelProperty(value = "장소이미지URL")
    private String placeImgUrl;

    public VotePlaceEntity() {}


}//VotePlaceEntity
