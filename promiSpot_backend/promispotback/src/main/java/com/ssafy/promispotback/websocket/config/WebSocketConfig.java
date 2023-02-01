package com.ssafy.promispotback.websocket.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {


	@Override
	public void configureMessageBroker(MessageBrokerRegistry config) {

		// 해당 주소를 구독하는 클라이언트에게 메시지를 보낸다.
		config.enableSimpleBroker("/sub");

		// 메시지 발행 요청의 prefix를 넣는다. /pub로 시작하는 메시지만 해당 broker에서 받아 처리한다.
		config.setApplicationDestinationPrefixes("/pub");

		//	    registry.enableSimpleBroker("/queue", "/topic");
		//	    registry.setApplicationDestinationPrefixes("/app");

	}

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/stomp/chat").setAllowedOriginPatterns("*")
				.withSockJS();


		//	registry.addEndpoint("/ws/chat").setAllowedOriginPatterns("*")
		//	.withSockJS();
	}



	


}
