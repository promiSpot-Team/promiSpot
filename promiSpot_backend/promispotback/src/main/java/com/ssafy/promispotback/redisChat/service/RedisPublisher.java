package com.ssafy.promispotback.redisChat.service;

import com.ssafy.promispotback.websocket.model.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.stereotype.Service;

/*
Redis 발행 서비스

채팅방에 입장해 메시지를 작성하면 해당 메시지를 Redis Topic 에 발행하는 기능의 서비스 입니다.
이 서비스를 통해 메시지를 발행하면 대기하고 있던 redis 구독 서비스가 메시지를 처리합니다.

 */


@RequiredArgsConstructor
@Service
public class RedisPublisher {

    private final RedisTemplate<String, Object> redisTemplate;

    public void publish(ChannelTopic topic, ChatMessage message) {
        redisTemplate.convertAndSend(topic.getTopic(), message);
    }

}
