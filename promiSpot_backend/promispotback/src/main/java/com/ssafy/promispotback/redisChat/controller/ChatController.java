//package com.ssafy.promispotback.redisChat.controller;
//
//
//import com.ssafy.promispotback.redisChat.model.ChatMessage;
//import com.ssafy.promispotback.redisChat.repository.ChatRoomRepository;
//import com.ssafy.promispotback.redisChat.service.RedisPublisher;
//import lombok.RequiredArgsConstructor;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.simp.SimpMessageSendingOperations;
//import org.springframework.stereotype.Controller;
//
///*
//
//클라이언가 채팅방 입장시(topic)에서 대화가 가능하도록 리스너를 연동하는 enterChatRoom 메서드를 세팅
//채팅방에 발행된 메시지는 서로 다른 서버에 공유하기 위해 redis의 topic을 발행한다.
//
//*/
//
//@RequiredArgsConstructor
//@Controller
//public class ChatController {
//
//    private final RedisPublisher redisPublisher;
//    private final ChatRoomRepository chatRoomRepository;
//
//    // websocket "/pub/chat/message" 로 들어오는 메시지를 처리한다.
//
//    @MessageMapping("/chat/message")
//    public void message(ChatMessage message) {
//        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
//            chatRoomRepository.enterChatRoom(message.getRoomId());
//            message.setMessage(message.getSender() + "님이 입장하셨습니다.");
//        }
//
//        redisPublisher.publish(chatRoomRepository.getTopic(message.getRoomId()), message);
//
//    }
//}
