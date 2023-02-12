import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Info from "../../components/Info/Info";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import "../scss/Main.scss";
import { setToken } from "../../Redux/reducer/user";

export default function Main() {
  const memberSeq = useSelector((state) => state?.user?.info?.memberSeq);

  // if (!memberSeq) {
  //   window.location.replace('/login')
  // }

  const dispatch = useDispatch();

  // const logOut = async (e) => {
  //   e.preventDefault()
  //   const response = await axios({
  //     method: 'GET',
  //     url: `${SERVER_URL}/member/logout/${memberSeq}`
  //   })

  //   /* 로그아웃 성공하면 로컬 스토리지에 user info 삭제하기 */
  //   if (response.data.message === 'success') {
  //     dispatch(setToken(null))
  //   }
  // }
  return (
    <>
      {/* <button onClick={logOut}>로그아웃</button> */}
      <div className="main-info-wrapper">
        <Info date="1/12" subject="점심팟" time="10:00AM" />
      </div>
      <div className="main-img">
        <img src={require("../../img/Roadmap.png")} width="300px" />
      </div>
      <TabBar />
    </>
  );
}
