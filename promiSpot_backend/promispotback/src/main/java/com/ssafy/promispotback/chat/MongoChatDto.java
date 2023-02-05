package com.ssafy.promispotback.chat;


import lombok.Data;

@Data
public class MongoChatDto {

    private Integer promiseSeq;
    private Integer senderSeq;
    private String senderName;
    private String message;


}
