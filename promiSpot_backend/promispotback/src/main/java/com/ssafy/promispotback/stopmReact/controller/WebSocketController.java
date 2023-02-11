package com.ssafy.promispotback.stopmReact.controller;

import com.ssafy.promispotback.stopmReact.model.ChatDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WebSocketController {

    private final SimpMessageSendingOperations simpMessageSendingOperations;

    @MessageMapping("/chat")
    public void sendMessage(ChatDto chatDto, SimpMessageHeaderAccessor accessor) {

        System.out.println(chatDto.toString());

        simpMessageSendingOperations.convertAndSend("/sub/chat/" + chatDto.getChannelId(), chatDto);
    }



}
