package com.ssafy.promispotback.redisChat.service;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.promispotback.websocket.model.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;


/*
Redis 에서 메시지가 발행 될 때까지 대기하다가 메시지가 발행되면 해당 메시지를 읽어 처리하는 리스너
MessageListener 를 상속받아 onMessage 메소드를 작성
Redis 메세지가 발행되면 해당 메시지를 ChatMessage로 변환하고 messaging Template을 이용해
채팅방의 모든 websocket 클라이언트에게 메시지를 전달한다.

 */
@RequiredArgsConstructor
@Service
public class RedisSubscriber implements MessageListener {

    private final ObjectMapper objectMapper;
    private final RedisTemplate redisTemplate;
    private final SimpMessageSendingOperations messageTemplate;

    // Redis에서 메시지가 발행되면 작동되는 메시지
    @Override
    public void onMessage(Message message, byte[] pattern) {

        try {
            // redis 에서 발행된 데이터를 받아 deserialize
            String publishMessage = (String) redisTemplate.getStringSerializer().deserialize(message.getBody());

            // ChatMessage 객체로 매핑
            ChatMessage roomMessage = objectMapper.readValue(publishMessage, ChatMessage.class);

            // websocket 구독자에게 채팅 메시지 send
            messageTemplate.convertAndSend("/sub/chat/room" + roomMessage.getRoomId(), roomMessage);
        } catch (Exception e) {

        }

    }
}
