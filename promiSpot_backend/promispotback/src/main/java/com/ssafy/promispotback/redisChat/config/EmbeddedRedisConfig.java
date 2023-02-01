package com.ssafy.promispotback.redisChat.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import redis.embedded.RedisServer;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;


/*
채팅 서버가 실행될 때 Embedded Redis 서버도 동시에 실행하게 해주는 설정
local 환경에만 실행하기 위해 profile local을 선언해준다.
 */
@Profile("local")
@Configuration
public class EmbeddedRedisConfig {

    @Value("${spring.redis.port}")
    private int redisPort;

    private RedisServer redisServer;

    @PostConstruct
    public void redisServer() {
        redisServer = new RedisServer(redisPort);
        redisServer.start();;
    }

    @PreDestroy
    public void stopRedis() {
        if (redisServer != null) {
            redisServer.stop();
        }
    }



}
