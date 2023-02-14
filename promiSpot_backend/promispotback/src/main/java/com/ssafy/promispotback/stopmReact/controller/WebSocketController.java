package com.ssafy.promispotback.stopmReact.controller;

import com.ssafy.promispotback.stopmReact.model.ChatDto;
import com.ssafy.promispotback.stopmReact.model.ChattingDto;
import com.ssafy.promispotback.stopmReact.model.DepartureDto;
import com.ssafy.promispotback.stopmReact.model.VotePlaceDto;
import com.ssafy.promispotback.stopmReact.service.ChattingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WebSocketController {

    private final SimpMessageSendingOperations simpMessageSendingOperations;

    @Autowired
    ChattingService chattingService;

    // 채팅 stomp 웹 소켓(예시)
//    @MessageMapping("/chat")
//    public void sendMessage(ChatDto chatDto, SimpMessageHeaderAccessor accessor) {
//        System.out.println(chatDto.toString());
//        simpMessageSendingOperations.convertAndSend("/sub/chat/" + chatDto.getChannelId(), chatDto);
//    }


    // 채팅 stomp 웹 소켓
    @MessageMapping("/chatting")
    public void sendChatting(ChattingDto chattingDto, SimpMessageHeaderAccessor accessor) {
        System.out.println(chattingDto.toString());
        chattingService.saveChat(chattingDto);
        simpMessageSendingOperations.convertAndSend("/sub/chatting/" + chattingDto.getPromiseSeq(), chattingDto);
    }


    // 출발지 stomp 웹소켓
    @MessageMapping("/departure")
    public void sendDeparture(DepartureDto departureDto, SimpMessageHeaderAccessor accessor) {
        System.out.println("출발지 메시지 되는지 확인");
        System.out.println(departureDto.getPromiseSeq());
        simpMessageSendingOperations.convertAndSend("/sub/departure/" + departureDto.getPromiseSeq(), departureDto);
    }


    @MessageMapping("/votePlace")
    public void sendVotePlace(VotePlaceDto votePlaceDto, SimpMessageHeaderAccessor accessor) {
        System.out.println("약속 후보 장소가 되는지 확인");
        System.out.println(votePlaceDto.getPromiseSeq());
        simpMessageSendingOperations.convertAndSend("/sub/votePlace/" + votePlaceDto.getPromiseSeq(), votePlaceDto);
    }



}
