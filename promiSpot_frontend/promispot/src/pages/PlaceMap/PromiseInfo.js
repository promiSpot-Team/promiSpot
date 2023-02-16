import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../scss/Map_Container.scss";
import axios from "axios";
import { SERVER_URL } from "../../constants/constants";
import { useLocation } from "react-router-dom";

export default function PromiseInfo() {
  const location = useLocation();

  const [promise, setPromise] = useState();
  const [participantList, setParticipantList] = useState();

  const searchPromise = async () => {
    var path = location.pathname;
    var parse = path.split("/");
    var promiseSeq = parse[2];

    console.log("인포에서 promiseSeq : ", promiseSeq);

    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/promise/get/${promiseSeq}`,
    });
    if (response.data !== "fail") {
      console.log("인포에서 response.data : ", response.data);
      setPromise(response.data);
      setParticipantList(response.data.participantList);
    }
  };

  // 처음 시작될 때 실행될 함수들
  useEffect(() => {
    searchPromise();
  }, []);

  useEffect(() => {
    console.log("인포에서 promise : ", promise);
    console.log("인포에서 participantList : ", participantList);
  }, [promise]);

  return (
    <motion.div
      className="place-modal-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        // ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {promise && participantList && (
        <div>
          <div> {promise.promiseTitle} </div>
          <div> {promise.promiseDate} </div>
          <div> {promise.promiseDay} </div>

          <div> 참가자 목록 </div>
          {participantList.map((participant) => (
            <div key={participant.memberSeq}>
              <img src={participant.memberImgPath}></img>
              <div>{participant.memberName}</div>
              {promise.promiseLeader === participant.memberSeq ? <div> 약속장 </div> : <div></div>}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
