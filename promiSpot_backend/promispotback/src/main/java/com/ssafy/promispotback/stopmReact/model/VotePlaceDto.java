package com.ssafy.promispotback.stopmReact.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class VotePlaceDto {

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    public VotePlaceDto() {
    }

    public VotePlaceDto(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }

    public int getPromiseSeq() {
        return promiseSeq;
    }

    public void setPromiseSeq(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }
}
