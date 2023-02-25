import * as StompJs from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { SERVER_URL } from "../../constants/constants";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../scss/Chatting.scss";

const spawn = require("child_process").spawn;

export default function Chatting() {
  // 화면에 표시될 채팅 기록
  const [chatList, setChatList] = useState([]);
  const searchChatList = async () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];
    // limit는 불러올 채팅의 갯수
    const limit = 8;
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
      // ws 로 서버에 올리면 보안상의 문제로 에러가 발생한다.
      // wss를 사용하면 보안이 걸려 문제가 해결될 것 이다. 라고 chatgpt가 말함
      // wss를 사용하면 보안이 걸려 문제가 해결될 것 이다. 라고 chatgpt가 말함
      brokerURL: "",
      // brokerURL: "",
      onConnect: () => {
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
    <motion.div
      className="chatting-wrapper"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div className="chatting-contents-wrapper">
        {chatList.length > 0 &&
          chatList.map((one, index) => {
            return (
              <div key={index}>
                {one.senderName === member.memberName ? (
                  <div className="chatting-contents-one-me-wrapper">
                    <div className="chatting-contents-me-msg">
                      {one.message}
                    </div>
                  </div>
                ) : (
                  <div className="chatting-contents-one-other-wrapper">
                    <div className="chatting-contents-other-name">
                      {one.senderName}
                    </div>
                    <div className="chatting-contents-other-msg">
                      {one.message}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <form
        className="chatting-new-wrapper"
        onSubmit={(event) => handleSubmit(event, chat)}
      >
        <div className="chatting-new-text">
          <input
            className="chatting-new-text-input"
            type={"text"}
            name={"chatInput"}
            onChange={handleChange}
            value={chat}
            placeholder="채팅 보내기"
          />
        </div>
        <button className="chatting-new-btn" type={"submit"}>
          <BiSend
            className="chatting-new-btn-icon"
            size="3vh"
            color="#ffffff"
          />
        </button>
        {/* <input type={"submit"} value={<BiSend />} /> */}
      </form>
    </motion.div>
  );
}
