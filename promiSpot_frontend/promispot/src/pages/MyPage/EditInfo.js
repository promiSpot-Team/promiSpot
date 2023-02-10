import { FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import "../scss/MyPage.scss";

export default function InfoEdit() {
  const { memberSeq, memberNick } = useSelector((state) => state.user.info);
  const [myInfoList, setMyInfoList] = useState([]);
  const [user_userNick, setUser_userNick] = useState();

  const handleChange_userNick = (e) => {
    e.preventDefault();
    setUser_userNick(e.target.value);
  };

  const editMyInfo = async () => {
    try {
      const response1 = await axios({
        method: "POST",
        url: `${SERVER_URL}/member/${memberSeq}`,
        data: {
          // memberNick: member_nick,
          memberNick: user_userNick,
          // memberPhoneNum: member_phone,
        },
      });
      if (response1.data !== "fail") {
      }
      Navigate("/mypage");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return () => {
      const newJoinInfo = {
        email: "",
        nickName: "",
        phoneNumber: "",
      };
      // dispatch(setJoinInfo(newJoinInfo))
    };
  }, []);

  useEffect(() => {}, [myInfoList]);

  function goMyAddress() {
    window.location.replace("/myaddress");
  }

  return (
    <div className="info-edit">
      {/* 이메일 입력 */}
      <FormControl sx={{ width: "70%" }} variant="standard">
        <TextField
          className="input-form-wrapper"
          id="user_userNick"
          label="이메일"
          placeholder="ssafy@ssafy.com"
          name="email"
          type="email"
          multiline
          variant="standard"
          fontFamily="Pretendard-Bold"
          margin="dense"
          // defaultValue={joinInfo?.email ? joinInfo.email : null}
          onChange={handleChange_userNick}
        />
      </FormControl>
    </div>
  );
}
