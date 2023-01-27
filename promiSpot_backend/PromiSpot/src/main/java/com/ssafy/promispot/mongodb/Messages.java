package com.ssafy.promispot.mongodb;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "messages")
public class Messages {
	
	private int promise_seq;
	private int message_from;
	private String message_content;
	private String message_create;
	
	
	
	public int getPromise_seq() {
		return promise_seq;
	}
	public void setPromise_seq(int promise_seq) {
		this.promise_seq = promise_seq;
	}
	public int getMessage_from() {
		return message_from;
	}
	public void setMessage_from(int message_from) {
		this.message_from = message_from;
	}
	public String getMessage_content() {
		return message_content;
	}
	public void setMessage_content(String message_content) {
		this.message_content = message_content;
	}
	public String getMessage_create() {
		return message_create;
	}
	public void setMessage_create(String message_create) {
		this.message_create = message_create;
	}
	
	
	
	
	
}
