import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import { useSelector, useDispatch } from "react-redux";
import { editInfo, reissueToken, setAddress } from "../../Redux/reducer/user";
import "../scss/MyPage.scss";
import MyAddress from "./MyAddress";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FormControl, TextField } from "@mui/material";
import BasicButton from "../../components/Buttons/BasicButton";
import { setToken } from "../../Redux/reducer/user";

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
  //   setEditNick(e.target.value);
  // };

  const { memberId, memberSeq, accessToken, refreshToken } = useSelector(
    (state) => state.user.info
  );
  const addressInfo = useSelector((state) =>
    state?.user?.addressInfo ? state.user.addressInfo : null
  );

  const logOut = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "GET",
      url: `${SERVER_URL}/member/logout/${memberSeq}`,
    });

    /* 로그아웃 성공하면 로컬 스토리지에 user info 삭제하기 */
    if (response.data.message === "success") {
      dispatch(setToken(null));
    }
  };

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
        setMyAddressList(response3.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addAddress = async (data) => {
    try {
      const response4 = await axios({
        url: "/address",
        method: "POST",
        baseURL: SERVER_URL,
        data: {
          memberSeq,
          addressAddress: data.addressAddress,
          addressX: data.addressX,
          addressY: data.addressY,
          addressNick: data.addressNick,
          addressIsPrimary: data.addressIsPrimary,
        },
      });
      dispatch(setAddress(null));

      navigate("/myaddress");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [addressInfo]);

  const addressHandleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const addressData = {
      addressAddress: addressInfo.addressAddress,
      addressX: addressInfo.addressX,
      addressY: addressInfo.addressY,
      addressNick: "주소",
      addressIsPrimary: 0,
    };
    const {
      addressAddress,
      addressX,
      addressY,
      addressNick,
      addressIsPrimary,
    } = addressData;
    addAddress(addressData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const editData = new FormData(e.currentTarget);
    const data = {
      memberNick: editData.get("nickName"),
    };
    editMyInfo(data);
  };

  useEffect(() => {
    getMyInfo();
  }, [accessToken]);

  // useEffect(() => {
  //   editMyInfo();
  // });

  useEffect(() => {
    getMyAddress();
  }, []);

  useEffect(() => {}, [myInfoList]);

  function goMyAddress() {
    window.location.replace("/myaddress");
  }
  function goMyPage() {
    window.location.replace("/mypage");
  }

  const goAddress = () => {
    navigate("/myaddress");
  };

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
                      src={item.memberInfo.memberImgPath}
                      width="80px"
                    />
                    <div></div>
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
                  <div className="my-content-real-all-wrapper">
                    <div
                      className="my-content-address-wrapper"
                      onClick={goAddress}
                    >
                      {myAddressList &&
                        myAddressList.map((address) => {
                          return (
                            <div key={address.addressSeq}>
                              <div>
                                {address.addressIsPrimary === 1 ? (
                                  <div className="my-content-address">
                                    <div className="my-content-address-nick">
                                      {address.addressNick}
                                    </div>
                                    <div className="my-content-address-real">
                                      {address.addressAddress}
                                    </div>
                                    <div className="my-content-address-icon">
                                      <IoIosArrowForward size="3vh" />
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="my-content-info-wrapper">
                      <div className="my-content-info">
                        <div className="my-content-info-title">닉네임</div>
                        <div className="my-content-info-txt">
                          {item.memberInfo.memberNick}
                        </div>
                      </div>
                    </div>
                    <div className="my-content-line"></div>
                    <div className="my-content-info-wrapper">
                      <div className="my-content-info">
                        <div className="my-content-info-title">아이디</div>
                        <div className="my-content-info-txt">
                          {item.memberInfo.memberId}
                        </div>
                      </div>
                    </div>
                    <div className="my-content-line"></div>
                    <div className="my-content-info-wrapper">
                      <div className="my-content-info">
                        <div className="my-content-info-title">이메일</div>
                        <div className="my-content-info-txt">
                          {item.memberInfo.memberEmail}
                        </div>
                      </div>
                    </div>
                    <div className="my-content-line"></div>
                    <div className="my-content-info-wrapper">
                      <div className="my-content-info">
                        <div className="my-content-info-title">전화번호</div>
                        <div className="my-content-info-txt">
                          {item.memberInfo.memberPhoneNum}
                        </div>
                      </div>
                    </div>
                    <div className="my-content-line-2"></div>
                    <div className="my-content-logout-btn-wrapper">
                      <button className="basicButton" onClick={logOut}>
                        로그아웃
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <div>
          {myInfoList &&
            myInfoList.map((item, idx) => {
              return (
                <div className="content" key={idx}>
                  <div className="my-content-img">
                    <img
                      className="my-content-img-real"
                      src={item.memberInfo.memberImgPath}
                      width="80px"
                    />
                    <div></div>
                  </div>
                  <div className="my-content-name">
                    {item.memberInfo.memberName}
                  </div>
                  <div className="mypage-edit-input-wrapper">
                    <form
                      className="join-input-wrapper"
                      onSubmit={handleSubmit}
                    >
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
                      <div onClick={goMyPage}>
                        <div className="mypage-edit-btn">
                          <button className="basicButton">수정</button>
                        </div>
                      </div>
                      {/* <button onClick={editMyInfo}>수정</button> */}
                    </form>
                  </div>
                </div>
              );
            })}
        </div>
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
