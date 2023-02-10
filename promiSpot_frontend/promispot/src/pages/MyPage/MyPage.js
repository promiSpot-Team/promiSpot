import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { editInfo, reissueToken } from "../../reducer/user";
import "../scss/MyPage.scss";
import MyAddress from "./MyAddress";
import { FormControl, TextField } from "@mui/material";

export default function MyPage({ history }) {
  const [myInfoList, setMyInfoList] = useState([]);
  const [myAddressList, setMyAddressList] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [editNick, setEditNick] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeNextPage = () => {
    setNextPage(!nextPage);
  };

  const clearText = (e) => {
    setText("");
  };

  // const handleEditChange = (e) => {
  //   // console.log(editNick);
  //   setEditNick(e.target.value);
  // };

  const {
    memberId,
    memberSeq,
    memberPhoneNum,
    memberName,
    memberNick,
    accessToken,
    refreshToken,
  } = useSelector((state) => state.user.info);

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

  // 내 정보 수정
  const editMyInfo = async (data) => {
    try {
      const response2 = await axios({
        method: "POST",
        url: `${SERVER_URL}/member/${memberSeq}`,
        data: {
          memberNick: data.memberNick,
          memberPhoneNum: data.memberPhoneNum,
        },
      });
      // dispatch(editInfo())
    } catch (err) {
      console.log(err);
    }
  };

  // 내 주소 조회
  const getMyAddress = async () => {
    try {
      const response3 = await axios({
        method: "GET",
        url: `${SERVER_URL}/address/addressList/${memberSeq}`,
      });
      if (response3.data !== "fail") {
        setMyAddressList([response3.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const editData = new FormData(e.currentTarget);
    const data = {
      memberNick: editData.get("nickName"),
      memberPhoneNum: editData.get("phoneNumber"),
    };
    // console.log(memberNick);
    editMyInfo(data);
  };
  useEffect(() => {
    getMyInfo();
  }, [accessToken]);

  useEffect(() => {
    editMyInfo();
  });

  useEffect(() => {
    // console.log("myInfoList", myInfoList)
  }, [myInfoList]);

  function goMyAddress() {
    window.location.replace("/myaddress");
  }
  function goMyPage() {
    window.location.replace("/mypage");
  }

  return (
    <div className="mypage">
      {!nextPage ? (
        <>
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
                  <div className="my-content-edit-btn-wrapper">
                    <button
                      className="my-content-edit-btn"
                      onClick={changeNextPage}
                    >
                      편집
                    </button>
                  </div>
                  <div>
                    {" "}
                    {myAddressList &&
                      myAddressList.map((item, idx) => {
                        return <div></div>;
                      })}
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
        </>
      ) : (
        <>
          {myInfoList &&
            myInfoList.map((item, idx) => {
              return (
                <div>
                  <form className="join-input-wrapper" onSubmit={handleSubmit}>
                    <FormControl sx={{ width: "70%" }} variant="standard">
                      <TextField
                        className="input-form-wrapper"
                        id="nickName"
                        label="닉네임"
                        placeholder={item.memberInfo.memberNick}
                        name="nickName"
                        multiline
                        variant="standard"
                        fontFamily="Pretendard-Bold"
                        // defaultValue={item.memberInfo.memberNick}
                        margin="dense"
                        // defaultValue={item.memberInfo.memberNick}
                        // onChange={handleEditChange}
                      >
                        {/* <div onClick={clearText}>삭제</div> */}
                      </TextField>
                    </FormControl>
                    <FormControl sx={{ width: "70%" }} variant="standard">
                      <TextField
                        className="input-form-wrapper"
                        id="phoneNumber"
                        label="전화번호"
                        placeholder={item.memberInfo.memberPhoneNum}
                        name="phoneNumber"
                        multiline
                        variant="standard"
                        fontFamily="Pretendard-Bold"
                        // defaultValue={item.memberInfo.memberPhoneNum}
                        margin="dense"
                        // defaultValue={item.memberInfo.memberNick}
                        // onChange={handleEditChange}
                      />
                    </FormControl>
                    <div onClick={goMyPage}>
                      <button>수정</button>
                    </div>
                    {/* <button onClick={editMyInfo}>수정</button> */}
                  </form>
                </div>
              );
            })}
        </>
      )}
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
