package com.ssafy.promispotback.mongdb.chat;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/mongoChat")
public class MongoChatController {

    @Autowired
    MongoChatService chatService;

    // chat 저장
    @PostMapping("/save")
    public void saveChat(@RequestBody MongoChatDto chatDto) {
        chatService.saveChat(chatDto);
    }

    // chat 조회하기
    @GetMapping("/getList/{promiseSeq}")
    public List<MongoChatModel> getChatList(@PathVariable("promiseSeq") Integer promiseSeq) {
        System.out.println("promiseSeq : " + promiseSeq);
        return chatService.getChatList(promiseSeq);
    }
}
