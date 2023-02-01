package com.ssafy.promispotback.redisChat.model;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.UUID;


/*

Redis 저장되는 객체들은 Serialize 가능해야 하므로
Serializable 을 참조하도록 선언하고
SerialVersionUID를 세팅해 줍니다.

 */

@Getter
@Setter
public class ChatRoom implements Serializable {

	private static final long serialVersionUID = 6494678977089006639L;

	private String roomId;
	private String name;
	
	public static ChatRoom create(String name) {
		ChatRoom chatRoom = new ChatRoom();
		chatRoom.roomId = UUID.randomUUID().toString();
		chatRoom.name = name;
		return chatRoom;
	}






	

}
