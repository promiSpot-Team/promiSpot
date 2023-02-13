package com.ssafy.promispotback.stopmReact.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class DepartureDto {

    @ApiModelProperty(value = "약속일련번호")
    private int promiseSeq;

    public DepartureDto() {
    }

    public DepartureDto(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }

    public int getPromiseSeq() {
        return promiseSeq;
    }

    public void setPromiseSeq(int promiseSeq) {
        this.promiseSeq = promiseSeq;
    }


}
