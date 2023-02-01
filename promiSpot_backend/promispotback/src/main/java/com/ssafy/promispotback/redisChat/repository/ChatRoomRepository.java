package com.ssafy.promispotback.redisChat.repository;


import com.ssafy.promispotback.redisChat.model.ChatRoom;
import com.ssafy.promispotback.redisChat.service.RedisSubscriber;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

// 채팅방을 생성하고 정보를 조회하는 Repository 
/*

채팅방 정보는 초기화 되지 않도록 생성 시 Redis Hash에 저장하도록 처리합니다.
채팅방 정보를 조회할 때는 Redis Hash에 저장된 데이터를 불러오도록 메서드 내용을 수정합니다.
채팅방 입장 시에는 채팅방 id로 Redis topic을 조회해 pub / sub 메시지 리스너와 연동합니다.

 */


@RequiredArgsConstructor
@Repository
public class ChatRoomRepository {

	// 채팅방(topic)에 발행되는 메시지를 처리할 리스너
	private final RedisMessageListenerContainer redisMessageListener;

	// 구독 처리 서비스
	private final RedisSubscriber redisSubscriber;

	// Redis
	private static final String CHAT_ROOMS = "CHAT_ROOM";
	private final RedisTemplate<String, Object> redisTemplate;
	private HashOperations<String, String, ChatRoom> opsHashChatRoom;



	// 채팅방의 대화 메시지를 발행하기 위한 redis topic 정보
	// 서버별로 채팅방에 매치되는 topic 정보를 Map에 넣어 roomId로 찾을 수 있도록 합니다.
	private Map<String, ChannelTopic> topics;


	// @PostConstruct은 의존성 주입이 이루어진 후 초기화를 수행하는 메소드 이다. 
	@PostConstruct
	private void init() {
		opsHashChatRoom = redisTemplate.opsForHash();
		topics = new HashMap<>();
	}

	// 체팅방 생성순서 최근 순으로 반환 
	public List<ChatRoom> findAllRoom() {
		return opsHashChatRoom.values(CHAT_ROOMS);
	}

	// 룸아이디로 조회한다. 
	public ChatRoom findRoomById(String id) {
		return opsHashChatRoom.get(CHAT_ROOMS, id);
	}

	// 채팅방을 name이란 이름으로 생성합니다. 
	public ChatRoom createChatRoom(String name) {
		ChatRoom chatRoom = ChatRoom.create(name);
		opsHashChatRoom.put(CHAT_ROOMS, chatRoom.getRoomId(), chatRoom);
		return chatRoom;
	}

	// 채팅방 입장
	// redis에 topic을 만들고 pub/sub 통신을 하기 위해 리스너를 설정한다.
	public void enterChatRoom(String roomId) {
		ChannelTopic topic = topics.get(roomId);
		if (topic == null) {
			topic = new ChannelTopic(roomId);
			redisMessageListener.addMessageListener(redisSubscriber, topic);
			topics.put(roomId, topic);
		}
	}

	public ChannelTopic getTopic(String roomId) {
		return topics.get(roomId);
	}

}




















