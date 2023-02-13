import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as StompJs from "@stomp/stompjs";

import { SERVER_URL } from "../../constants/constants";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";

const spawn = require("child_process").spawn;

export default function Chatting() {
  
  
  // 화면에 표시될 채팅 기록
  const [chatList, setChatList] = useState([]);
  const searchChatList = async () => {
    
    console.log("초기에 채팅 리스트 받아오기");


    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];
    // limit는 불러올 채팅의 갯수 
    const limit = 5;
    const response = await axios({
      method: "GET",
      // url: `http://localhost:9090/api/chatting/getList/${promiseSeq}/${limit} `,
      url: `${SERVER_URL}/chatting/getList/${promiseSeq}/${limit} `,
    });
    if (response.data !== "fail") {
      setChatList(response.data);
    }
  };


  // 메시지를 발행하는 코드
  const [chat, setChat] = useState(""); // 입력되는 채팅

  const member = useSelector((state) => state.user.info);

  // const { apply_id } = useParams();
  const { apply_id } = 1; // 채널을 구분하는 식별자를 URL 파라미터로 받는다.
  const client = useRef({});
  const location = useLocation();

  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://i8a109.p.ssafy.io:9090/api/ws",
      // brokerURL: "ws://localhost:9090/api/ws",
      onConnect: () => {
        console.log("success");
        subscribe();
      },
    });
    client.current.activate();
  };

  // 메시지를 발행하는 코드
  const publish = (chat) => {
    if (!client.current.connected) return;

    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];

    client.current.publish({
      destination: "/pub/chatting",
      body: JSON.stringify({
        promiseSeq: promiseSeq,
        senderSeq: member.memberSeq,
        senderName: member.memberName,
        message: chat,
      }),
    });

    setChat("");
  };

  // 채널을 구독하고 구독 중인 채널에서 메시지가 왔을 때 처리하는 코드
  const subscribe = () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];

    client.current.subscribe(`/sub/chatting/${promiseSeq}`, (body) => {
      const json_body = JSON.parse(body.body);
      setChatList((prev) => [...prev, json_body]);
      console.log("구독 메시지 받아오기");
    });
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  const handleChange = (event) => {
    // 채팅 입력 시 state에 값 설정
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => {
    // 보내기 버튼 눌렀을 때 publish
    event.preventDefault();
    publish(chat);
  };



  // 페이지가 처음 켜지면 작동되는 함수 
  useEffect(() => {
    searchChatList();
    connect();
    return () => disconnect();
  }, []);

  return (
    <div style={{ position: "absolute", zIndex: 999 }}>
      <h1>chatting</h1>

      <ul>
        {chatList.length > 0 &&
          chatList.map((one) => {
            return (
              <div>
                {one.senderName} : {one.message}
              </div>
            );
          })}
      </ul>

      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <div>
          <input type={"text"} name={"chatInput"} onChange={handleChange} value={chat} />
        </div>
        <input type={"submit"} value={"의견 보내기"} />
      </form>
    </div>
  );
}
