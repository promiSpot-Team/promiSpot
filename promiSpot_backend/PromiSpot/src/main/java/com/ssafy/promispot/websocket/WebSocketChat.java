package com.ssafy.promispot.websocket;

import java.io.IOException;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;




/*
1. bean 등록 / websocket 활성화  
 */

@Service
@ServerEndpoint("/*/socket/chat")
public class WebSocketChat {
	
	
	 private static Logger logger = LoggerFactory.getLogger(WebSocketChat.class);

	
	// 2. 클라이언트의 session 정보 저장 
	private static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());
	
		
		/*
		 * @ServerEndpoing 에서 명시한 URL로 요청이 들어올 경우 해당 메소드가 실행된다. 
		 * 클라이언트의 정보를 매개변수로 전달받는다. 
		 */
	   @OnOpen
	   public void onOpen(Session session) {
	        logger.info("open session : {}, clients={}", session.toString(), clients);


	        if(!clients.contains(session)) {
	            clients.add(session);
	            logger.info("session open : {}", session);
	        }else{
	            logger.info("이미 연결된 session");
	        }
	    }

	   
	    /*
	     * 클라이언트와 서버Socket이 연결된 상태에서, 메세지가 전달되면 해당 메서드가
	     *  실행되어 상수인 clients에 있는 모든 session에게 메세지를 전달합니다.
	     */
	    @OnMessage
	    public void onMessage(String message, Session session) throws IOException {
	        logger.info("receive message : {}", message);

	        for (Session s : clients) {
	            logger.info("send data : {}", message);

	            s.getBasicRemote().sendText(message);
	        }
	    }

	    
	    /*
	     * 
	     * 클라이언트가 URL을 바꾸거나 브라우저를 종료하면 
	     * 해당 메서드가 실행되어 클라이언트의 세션정보를 clients에서 제거합니다.
	     * 
	     */
	    @OnClose
	    public void onClose(Session session) {
	        logger.info("session close : {}", session);
	        clients.remove(session);
	    }
	

}
