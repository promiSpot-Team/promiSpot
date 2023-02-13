package com.ssafy.promispotback.stopmReact.repository;

import com.ssafy.promispotback.chat.MongoChatModel;
import com.ssafy.promispotback.stopmReact.model.ChattingModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChattingRepository extends MongoRepository<ChattingModel, String> {
    List<ChattingModel> findByPromiseSeq(Integer promiseSeq);
}
