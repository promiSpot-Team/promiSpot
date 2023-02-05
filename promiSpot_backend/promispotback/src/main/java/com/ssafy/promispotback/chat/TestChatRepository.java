package com.ssafy.promispotback.chat;

import com.ssafy.promispotback.websocket.model.ChatMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestChatRepository extends MongoRepository<ChatMessage, String> {

}
