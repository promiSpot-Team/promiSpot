package com.ssafy.promispotback.chat;

import com.ssafy.promispotback.websocket.model.ChatMessage;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MongoChatService {

    @Autowired
    MongoChatRepository chatRepository;

    @Autowired
    TestChatRepository testChatRepository;

    // chat 저장
    public void saveChat(MongoChatDto chatDto) {
        MongoChatModel chatModel = new MongoChatModel(chatDto);
        chatRepository.save(chatModel);
    }

    // chat 불러오기
    public List<MongoChatModel> getChatList(Integer promiseSeq) {
        return chatRepository.findByPromiseSeq(promiseSeq);
    }

    // test chat 저장
    public void saveChatMessage(ChatMessage chatMessage) {
        testChatRepository.save(chatMessage);
    }



}
