package com.ssafy.promispotback.websocket.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "chat")
public class ChatMessage {
	
	public enum MessageType {
		ENTER, TALK
	}
	
	private MessageType type; // 메시지 타입
	private String roomId; // 방번호
	private String sender; // 메시지 보낸 사람
	private String message; // 메시지 
	
	
	
	
	public ChatMessage() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ChatMessage(MessageType type, String roomId, String sender, String message) {
		super();
		this.type = type;
		this.roomId = roomId;
		this.sender = sender;
		this.message = message;
	}

	public MessageType getType() {
		return type;
	}
	public void setType(MessageType type) {
		this.type = type;
	}
	public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	

}
