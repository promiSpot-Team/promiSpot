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

    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/promise/get/${promiseSeq}`,
    });
    if (response.data !== "fail") {
      setPromise(response.data);
      setParticipantList(response.data.participantList);
    }
  };

  // 처음 시작될 때 실행될 함수들
  useEffect(() => {
    searchPromise();
  }, []);

  useEffect(() => {}, [promise]);

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
        <div className="promise-info-wrapper">
          <div className="promise-info-info">
            <div className="promise-info-title"> {promise.promiseTitle} </div>
            <div className="promise-info-date">
              {" "}
              {promise.promiseDate} {promise.promiseDay}
            </div>
          </div>
          {/* <div className="promise-info-day"> </div> */}

          <div className="promise-info-participants-wrapper">
            {participantList.map((participant) => (
              <div
                className="promise-info-participant"
                key={participant.memberSeq}
              >
                {promise.promiseLeader === participant.memberSeq ? (
                  <div className="promise-info-participant-one">
                    <img
                      className="promise-info-participant-boss-img"
                      src={participant.memberImgPath}
                    ></img>
                    <div className="promise-info-participant-boss-name">
                      {participant.memberName}
                    </div>
                  </div>
                ) : (
                  <div className="promise-info-participant-one">
                    <img
                      className="promise-info-participant-img"
                      src={participant.memberImgPath}
                    ></img>
                    <div className="promise-info-participant-name">
                      {participant.memberName}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
