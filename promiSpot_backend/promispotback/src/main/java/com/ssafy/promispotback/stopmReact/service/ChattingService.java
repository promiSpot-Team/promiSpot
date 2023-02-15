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

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;


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

//    public List<ChattingModel> getChattingModelsByPromiseSeq(Integer promiseSeq, Integer limit) {
//        return chattingRepository.findByPromiseSeq(promiseSeq).stream().limit(limit).collect(Collectors.toList());
//    }

    // 오름차순
//    public List<ChattingModel> getChattingModelsByPromiseSeq(Integer promiseSeq, Integer limit) {
//        return chattingRepository.findByPromiseSeq(promiseSeq)
//                .stream()
//                .sorted(Comparator.comparing(ChattingModel::getCreatedDate)
//                        .thenComparing(Comparator.comparing(ChattingModel::getCreatedTime))) // 날짜 기준으로 오름차순, 시간 기준으로 오름차순
//                .limit(limit)
//                .collect(Collectors.toList());
//    }

    // 내림차순
//    public List<ChattingModel> getChattingModelsByPromiseSeq(Integer promiseSeq, Integer limit) {
//        return chattingRepository.findByPromiseSeq(promiseSeq)
//                .stream()
//                .sorted(Comparator.comparing(ChattingModel::getCreatedDate).reversed()
//                        .thenComparing(Comparator.comparing(ChattingModel::getCreatedTime).reversed())) // 날짜 기준으로 내림차순, 시간 기준으로 내림차순
//                .limit(limit)
//                .collect(Collectors.toList());
//    }

    public List<ChattingModel> getChattingModelsByPromiseSeq(Integer promiseSeq, Integer limit) {
        List<ChattingModel> result = chattingRepository.findByPromiseSeq(promiseSeq)
                .stream()
                .sorted(Comparator.comparing(ChattingModel::getCreatedDate).reversed()
                        .thenComparing(Comparator.comparing(ChattingModel::getCreatedTime).reversed())) // 날짜 기준으로 내림차순, 시간 기준으로 내림차순
                .limit(limit)
                .collect(Collectors.toList());

        Collections.reverse(result); // 리스트의 순서를 뒤집어서 역순으로 만듦

        return result;
    }





}
