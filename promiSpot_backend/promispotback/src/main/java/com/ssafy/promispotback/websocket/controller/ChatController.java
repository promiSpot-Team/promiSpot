package com.ssafy.promispotback.websocket.controller;

import com.ssafy.promispotback.chat.MongoChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.ssafy.promispotback.websocket.model.ChatMessage;

import lombok.RequiredArgsConstructor;

/*
@RequiredArgsConstructor 생성자 주입해주는 롬복 
final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션 입니다. 
*/

@RequiredArgsConstructor
@Controller
public class ChatController {
	
	// private final 
	private final SimpMessageSendingOperations sendingOperations;

    private final MongoChatService mongoChatService;
	
  @MessageMapping("/chat/message")
    public void enter(ChatMessage message) {
        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
            message.setMessage(message.getSender()+"님이 입장하였습니다.");
        }

        mongoChatService.saveChatMessage(message);
        System.out.println(message.toString());
        sendingOperations.convertAndSend("/topic/chat/room/"+message.getRoomId(),message);





  	}

}
