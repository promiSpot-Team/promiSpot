package com.ssafy.promispotback.stopmReact.model;

import com.ssafy.promispotback.chat.MongoChatDto;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Data
@Document(collection = "chatting")
public class ChattingModel {

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


    public ChattingModel() {
    }

    public ChattingModel(String id, Integer promiseSeq, Integer senderSeq, String senderName, String message, String createdDate, String createdTime) {
        this.id = id;
        this.promiseSeq = promiseSeq;
        this.senderSeq = senderSeq;
        this.senderName = senderName;
        this.message = message;
        this.createdDate = createdDate;
        this.createdTime = createdTime;
    }

    public ChattingModel(ChattingDto chattingDto) {
        this.promiseSeq = chattingDto.getPromiseSeq();
        this.senderSeq = chattingDto.getSenderSeq();
        this.senderName = chattingDto.getSenderName();
        this.message = chattingDto.getMessage();
        this.createdDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
        this.createdTime = LocalTime.now().format(DateTimeFormatter.ofPattern("hh:mm"));
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }


}
