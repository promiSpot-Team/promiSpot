package com.ssafy.promispotback.stopmReact.service;

import com.ssafy.promispotback.chat.MongoChatDto;
import com.ssafy.promispotback.chat.MongoChatModel;
import com.ssafy.promispotback.chat.MongoChatRepository;
import com.ssafy.promispotback.chat.TestChatRepository;
import com.ssafy.promispotback.stopmReact.model.ChattingDto;
import com.ssafy.promispotback.stopmReact.model.ChattingModel;
import com.ssafy.promispotback.stopmReact.repository.ChattingRepository;
import com.ssafy.promispotback.websocket.model.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;


@Component
public class ChattingService {
    @Autowired
    ChattingRepository chattingRepository;

    // chatting 저장
    public void saveChat(ChattingDto chattingDto) {
        ChattingModel chattingModel = new ChattingModel(chattingDto);
        chattingRepository.save(chattingModel);
    }

    // chatting 불러오기
    public List<ChattingModel> getChattingtList(Integer promiseSeq) {
        return chattingRepository.findByPromiseSeq(promiseSeq);
    }




}
