package com.ssafy.promispotback.stopmReact.model;

import lombok.Data;

@Data
public class ChatDto {

    private Integer channelId;
    private Integer writerId;
    private String chat;

    public ChatDto() {
    }

    public ChatDto(Integer channelId, Integer writerId, String chat) {
        this.channelId = channelId;
        this.writerId = writerId;
        this.chat = chat;
    }

    public Integer getChannelId() {
        return channelId;
    }

    public void setChannelId(Integer channelId) {
        this.channelId = channelId;
    }

    public Integer getWriterId() {
        return writerId;
    }

    public void setWriterId(Integer writerId) {
        this.writerId = writerId;
    }

    public String getChat() {
        return chat;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }


}
