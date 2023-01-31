package com.ssafy.promispot.websocket.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.ssafy.promispot.websocket.model.ChatMessage;

import lombok.RequiredArgsConstructor;

/*
@RequiredArgsConstructor 생성자 주입해주는 롬복 
final이 붙ㅌ거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션 입니다. 
*/


@RequiredArgsConstructor
@Controller
public class ChatController {
	
	private final SimpMessageSendingOperations messagingTemplate;
	
	public ChatController(SimpMessageSendingOperations messagingTemplate) {
		this.messagingTemplate = messagingTemplate;
	}



	@MessageMapping("/chat/message")
	public void message(ChatMessage message) {
		if(ChatMessage.MessageType.JOIN.equals(message.getType())) {
			message.setMessage(message.getSender() + "님이 입장하셨습니다.");
		}
		messagingTemplate.convertAndSend("/sub/chat/room" + message.getRoomId(), message);
	}

	
}
