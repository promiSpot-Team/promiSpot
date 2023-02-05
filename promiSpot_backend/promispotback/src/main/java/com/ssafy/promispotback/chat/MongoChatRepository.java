package com.ssafy.promispotback.chat;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MongoChatRepository extends MongoRepository<MongoChatModel, String> {

    List<MongoChatModel> findByPromiseSeq(Integer promiseSeq);
}
