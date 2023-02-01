package com.ssafy.promispotback.redisChat.config;

import com.ssafy.promispotback.redisChat.repository.ChatRoomRepository;
import com.ssafy.promispotback.redisChat.service.RedisPublisher;
import com.ssafy.promispotback.websocket.model.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

/*

클라이언트가 채팅방 입장시 채팅방(topic)에서 대화가 가능하도록 리스너를 연동하는
enterChatRoom 메소드를 세팅한다.
채팅방에 발행된 메세지는 서로 다른 서버에 공유하기 위해 redis 의 topic 으로 발행한다.

*/

@RequiredArgsConstructor
@Controller
public class ChatController {

    private final RedisPublisher redisPublisher;
    private final ChatRoomRepository chatRoomRepository;

	
  @MessageMapping("/chat/message")
    public void enter(ChatMessage message) {
        if (ChatMessage.MessageType.ENTER.equals(message.getType())) {
            chatRoomRepository.enterChatRoom(message.getRoomId());
            message.setMessage(message.getSender()+"님이 입장하였습니다.");
        }
  	}

}
