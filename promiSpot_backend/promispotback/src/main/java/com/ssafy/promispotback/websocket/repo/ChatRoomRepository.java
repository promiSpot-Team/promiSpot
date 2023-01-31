package com.ssafy.promispotback.websocket.repo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.ssafy.promispotback.websocket.model.ChatRoom;

// 채팅방을 생성하고 정보를 조회하는 Repository 
// ChatService 는 ChatRoomRepository 가 대체하므로 만들지 않는다. 


@Repository
public class ChatRoomRepository {

	
	
	// 나중에 DB로 대체하자 
	private Map<String, ChatRoom> chatRoomMap;
	
	
	// @PostConstruct은 의존성 주입이 이루어진 후 초기화를 수행하는 메소드 이다. 
	@PostConstruct
	private void init() {
		chatRoomMap = new LinkedHashMap<>();
	}
	
	// 체팅방 생성순서 최근 순으로 반환 
	public List<ChatRoom> findAllRoom() {
		List chatRooms = new ArrayList<>(chatRoomMap.values());
		Collections.reverse(chatRooms);
		return chatRooms;
	}
	
	// 룸아이디로 조회한다. 
	public ChatRoom findRoomById(String id) {
		return chatRoomMap.get(id);
	}
	
	// 채팅방을 name이란 이름으로 생성합니다. 
	public ChatRoom createChatRoom(String name) {
		ChatRoom chatRoom = ChatRoom.create(name);
		chatRoomMap.put(chatRoom.getRoomId(), chatRoom);
		return chatRoom;
	}
	
	
}




















