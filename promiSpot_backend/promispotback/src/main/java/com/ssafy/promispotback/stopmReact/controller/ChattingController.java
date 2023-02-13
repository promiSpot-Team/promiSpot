package com.ssafy.promispotback.stopmReact.controller;

import com.ssafy.promispotback.chat.MongoChatDto;
import com.ssafy.promispotback.promise.model.entity.PromiseDataEntity;
import com.ssafy.promispotback.stopmReact.model.ChattingDto;
import com.ssafy.promispotback.stopmReact.model.ChattingModel;
import com.ssafy.promispotback.stopmReact.service.ChattingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/chatting")
public class ChattingController {

    @Autowired
    ChattingService chattingService;

    @PostMapping("/save")
    public void saveChat(@RequestBody ChattingDto chattingDto) {
        System.out.println("save work");
        chattingService.saveChat(chattingDto);
    }

    @GetMapping("getList/{promiseSeq}")
    public ResponseEntity<?> getPromise(@PathVariable("promiseSeq") int promiseSeq) {
        try {
            List<ChattingModel> chattingList = chattingService.getChattingtList(promiseSeq);

            if (chattingList != null) {
                System.out.println("success work");
                return new ResponseEntity<List<ChattingModel>>(chattingList, HttpStatus.OK);
            } else {
                System.out.println("fail work");
                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }

    private ResponseEntity<String> exceptionHandling(Exception e) {
        return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
