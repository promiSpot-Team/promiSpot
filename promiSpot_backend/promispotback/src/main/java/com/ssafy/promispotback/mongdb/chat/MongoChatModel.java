package com.ssafy.promispotback.mongdb.chat;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Data
@Document(collection = "chat")
public class MongoChatModel {

    @Field("_id")
    private String id;
    @Field("promise_seq")
    private Integer promiseSeq;
    @Field("sender_seq")
    private Integer senderSeq;
    @Field("sender_name")
    private String senderName;
    @Field("message")
    private String message;
    @Field("created_date")
    private String createdDate;
    @Field("created_time")
    private String createdTime;


    public MongoChatModel() {
    }

    public MongoChatModel(String id, Integer promiseSeq, Integer senderSeq, String senderName, String message, String createdDate, String createdTime) {
        this.id = id;
        this.promiseSeq = promiseSeq;
        this.senderSeq = senderSeq;
        this.senderName = senderName;
        this.message = message;
        this.createdDate = createdDate;
        this.createdTime = createdTime;
    }

    public MongoChatModel(MongoChatDto chatDto) {
        this.promiseSeq = chatDto.getPromiseSeq();
        this.senderSeq = chatDto.getSenderSeq();
        this.senderName = chatDto.getSenderName();
        this.message = chatDto.getMessage();
        this.createdDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
        this.createdTime = LocalTime.now().format(DateTimeFormatter.ofPattern("hh:mm"));
    }


}
