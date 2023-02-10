import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { reissueToken } from "../../reducer/user";
import "../scss/MyPage.scss";
import MyAddress from "./MyAddress";

export default function MyPage({ history }) {
  const [myInfoList, setMyInfoList] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeNextPage = () => {
    setNextPage(!nextPage);
  };
  const { memberId, memberSeq, accessToken, refreshToken } = useSelector(
    (state) => state.user.info
  );

  // 내 정보 조회
  const getMyInfo = async () => {
    try {
      axios.defaults.headers.common["access-token"] = `${accessToken}`;
      axios.defaults.headers.common["refresh-token"] = `${refreshToken}`;

      const response1 = await axios({
        method: "GET",
        url: `${SERVER_URL}/member/${memberSeq}`,
      });
      if (response1.data !== "fail") {
        setMyInfoList([response1.data]);
      }
    } catch (err) {
      // HTTP 401 권한없음 에러
      if (err.response.status === 401 || err.response.status === 400) {
        try {
          axios.defaults.headers.common["refresh-token"] = `${refreshToken}`;
          const response2 = await axios({
            url: `${SERVER_URL}/member/refresh`,
            method: "POST",
            data: {
              memberId,
            },
          });
          const newAccessToken = response2.data["access-token"];

          // 재발급 받은 토큰 store에 저장
          dispatch(reissueToken(newAccessToken));
        } catch (err) {
          console.log(err);
          navigate("/login");
        }
      }
    }
  };
  useEffect(() => {
    getMyInfo();
  }, [accessToken]);

  useEffect(() => {
    // console.log("myInfoList", myInfoList)
  }, [myInfoList]);

  function goMyAddress() {
    window.location.replace("/myaddress");
  }

  return (
    <div className="mypage">
      {myInfoList &&
        myInfoList.map((item, idx) => {
          return (
            <div key={idx} className="content">
              <div className="my-content-img">
                <img
                  className="my-content-img-real"
                  src={require("../../img/IU_Profile.jpg")}
                  width="100px"
                />
              </div>
              <div className="my-content-name">
                {item.memberInfo.memberName}
              </div>
              <div
                onClick={goMyAddress}
                className="address"
                style={{ borderBottom: "1px solid #c4c4c4" }}
              >
                <p>서울특별시 강남구 테헤란로 212</p>
                <p>멀티캠퍼스 역삼</p>
              </div>
              <div className="address">
                <p>닉네임</p>
                <p>{item.memberInfo.memberNick}</p>
              </div>
              <div className="address">
                <p>아이디</p>
                <p>{item.memberInfo.memberId}</p>
              </div>
              <div className="logout-btn"></div>
            </div>
          );
        })}

      {/* {myInfoList && myInfoList.map((info) => {
          return (<div>
              <ProfileInfoS             
             //   imgName="PBG_Profile"  
            //   nickName={info.memberNick} 
            //   id={info.memberId}/>
            // <div>`${info.memberNick}`</div>
            <div>{info.memberName}</div>
            <div>{info.memberId}</div></div>
          )
        })} */}
      <TabBar />
    </div>
  );
}
