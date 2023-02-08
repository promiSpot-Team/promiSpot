import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import * as StompJs from "@stomp/stompjs";
import { SERVER_URL } from "../../constants/constants";

const spawn = require("child_process").spawn;

export default function Chatting() {
  // 화면에 표시될 채팅 기록
  const [chatList, setChatList] = useState([]);

  // 메시지를 발행하는 코드
  const [chat, setChat] = useState(""); // 입력되는 채팅

  // const { apply_id } = useParams();
  const { apply_id } = 1; // 채널을 구분하는 식별자를 URL 파라미터로 받는다.
  const client = useRef({});

  // const connect = () => {
  //   client.current = new StompJs.Client({
  //     brokerURL: "ws://localhost:9090/api/ws",
  //     onConnect: () => {
  //       console.log("success");
  //       subscribe();
  //     },
  //   });
  //   client.current.activate();
  // };

  // 메시지를 발행하는 코드
  const publish = (chat) => {
    if (!client.current.connected) return;

    client.current.publish({
      destination: "/pub/chat",
      body: JSON.stringify({
        channelId: apply_id,
        writerId: 1,
        chat: chat,
      }),
    });

    setChat("");
  };

  // 채널을 구독하고 구독 중인 채널에서 메시지가 왔을 때 처리하는 코드
  const subscribe = () => {
    client.current.subscribe("/sub/chat/" + apply_id, (body) => {
      const json_body = JSON.parse(body.body);
      setChatList((_chat_list) => [..._chat_list, json_body]);
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
    console.log(chat);
    publish(chat);
  };

  useEffect(() => {
    // connect();

    return () => disconnect();
  }, []);

  return (
    <div>
      <div className={"chat-list"}>{chatList}</div>
      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <div>
          <input
            type={"text"}
            name={"chatInput"}
            onChange={handleChange}
            value={chat}
          />
        </div>
        <input type={"submit"} value={"의견 보내기"} />
      </form>
    </div>
  );
}
