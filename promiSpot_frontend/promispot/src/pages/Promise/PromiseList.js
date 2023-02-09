import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { SERVER_URL } from "../../constants/constants";
import "../scss/Promise.scss";

import { useSelector } from "react-redux";

export default function PromiseList() {
  // 서버에서 promiseList를 받아오기

  const [promiseList, setPromiseList] = useState(null);
  const memberSeq = useSelector((state) => state.user.info.memberSeq);

  // api 통신을 통해 회원아이디에 해당하는 promiseList 가져오기
  const searchPromiseList = async () => {
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/promise/getList/${memberSeq}`,
    });
    if (response.data !== "fail") {
      setPromiseList(response.data);
    }
  };

  useEffect(() => {
    searchPromiseList();
  }, []);

  const navigate = useNavigate();

  const moveToPromise = () => {
    navigate("/map");
  };

  return (
    <div className="promise-list-wrapper">
      <ul>
        {promiseList !== null &&
          promiseList.map((promise) => {
            return (
              <div className="promise-list-each-wrapper" key={promise.promiseSeq}>
                <Card
                  date={promise.promiseDate}
                  time={promise.promiseTime}
                  title={promise.promiseTitle}
                  promiseSeq={promise.promiseSeq}
                ></Card>
              </div>
            );
          })}
      </ul>

      {/* <div className="promise-list-each-wrapper">
        <Card date="1월 12일, 목요일" time="10:00AM" title="점심팟" />
      </div>
      <div className="promise-list-each-wrapper">
        <Card date="1월 19일, 목요일" time="09:00PM" title="저녁팟" />
      </div> */}
    </div>
  );
}
