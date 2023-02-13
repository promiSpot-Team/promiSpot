package com.ssafy.promispotback.stopmReact.model;

import lombok.Data;

@Data
public class ChattingDto {

    private Integer promiseSeq;
    private Integer senderSeq;
    private String senderName;
    private String message;

    public ChattingDto() {
    }

    public ChattingDto(Integer promiseSeq, Integer senderSeq, String senderName, String message) {
        this.promiseSeq = promiseSeq;
        this.senderSeq = senderSeq;
        this.senderName = senderName;
        this.message = message;
    }

    public Integer getPromiseSeq() {
        return promiseSeq;
    }

    public void setPromiseSeq(Integer promiseSeq) {
        this.promiseSeq = promiseSeq;
    }

    public Integer getSenderSeq() {
        return senderSeq;
    }

    public void setSenderSeq(Integer senderSeq) {
        this.senderSeq = senderSeq;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
