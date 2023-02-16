package com.ssafy.promispotback.promise.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


@ApiModel(value = "PromiseEntity : 약속", description = "약속 정보를 나타낸다.")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
public class MapDto {

    @ApiModelProperty(value = "중간 지점 경도")
    private String middleX;

    @ApiModelProperty(value = "중간 지점 위도")
    private String middleY;

    public MapDto() {
    }

    public MapDto(String middleX, String middleY) {
        this.middleX = middleX;
        this.middleY = middleY;
    }

    public String getMiddleX() {
        return middleX;
    }

    public void setMiddleX(String middleX) {
        this.middleX = middleX;
    }

    public String getMiddleY() {
        return middleY;
    }

    public void setMiddleY(String middleY) {
        this.middleY = middleY;
    }
}
