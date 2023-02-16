import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import ProfileInfoS from "../../components/ProfileInfo/ProfileInfoS";
import { useSelector, useDispatch } from "react-redux";
import { reissueToken, setAddress } from "../../Redux/reducer/user";
import "../scss/MyPage.scss";
import BasicHeader from "../../components/Header/BasicHeader1";
import Modal2 from "../../components/Modal/Modal2";
import { HiPlus } from "react-icons/hi";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Back from "../../components/Icon/Back";

export default function MyAddress() {
  const [myAddressList, setMyAddressList] = useState([]);
  const [axiosMethod, setAxiosMethod] = useState("");
  const [addressNum, setAddressNum] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memberSeq, addressSeq } = useSelector((state) => state.user.info);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);

  var nowSeq = 0;
  // console.log("nowSeq?", nowSeq);
  const [checked, setChecked] = useState(false);

  function nowSeqIs(data) {
    nowSeq = data;
    console.log(nowSeq);
  }
  const handleAgree = (event) => {
    setChecked(event.target.checked);
  };

  const getMyAddress = async () => {
    try {
      const response1 = await axios({
        method: "GET",
        url: `${SERVER_URL}/address/addressList/${memberSeq}`,
      });
      if (response1.data !== "fail") {
        setMyAddressList(response1.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMyAddress = async (addressSeq) => {
    try {
      console.log("delete", addressSeq);
      // console.log(axiosMethod);
      const response2 = await axios({
        method: "DELETE",
        url: `${SERVER_URL}/address/${addressSeq}`,
      });
      window.location.replace("/myaddress");
    } catch (err) {
      console.log(err);
    }
  };

  const modifyMyAddress = async (data) => {
    try {
      console.log(addressSeq);
      const response3 = await axios({
        method: "PUT",
        url: `${SERVER_URL}/address/${addressNum.addressSeq}`,
        data: {
          memberSeq: memberSeq,
          addressNick: data.addressNick,
          addressIsPrimary: data.addressIsPrimary,
        },
      });
      window.location.replace("/myaddress");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifyData = new FormData(e.currentTarget);
    const data = {
      addressNick: modifyData.get("addressNick"),
      addressIsPrimary: checked === false ? 0 : 1,
    };
    console.log("data is", data);
    modifyMyAddress(data);
  };

  // const addAddress = async (data) => {
  //   try {
  //     const response4 = await axios({
  //       url: "/address",
  //       method: "POST",
  //       baseURL: SERVER_URL,
  //       data: {
  //         memberSeq,
  //         addressAddress: data.addressAddress,
  //         addressX: data.addressX,
  //         addressY: data.addressY,
  //         addressNick: data.addressNick,
  //         addressIsPrimary: data.addressIsPrimary,
  //       },
  //     });
  //     dispatch(setAddress(null));

  //     navigate("/myaddress");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {}, [addressInfo]);

  // const addressHandleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.currentTarget);
  //   const addressData = {
  //     addressAddress: addressInfo.addressAddress,
  //     addressX: addressInfo.addressX,
  //     addressY: addressInfo.addressY,
  //     addressNick: "주소",
  //     addressIsPrimary: 0,
  //   };
  //   console.log(addressData);
  //   addAddress(addressData);
  // };

  const handleChange_addressSeq = (e) => {
    e.preventDefault();
    setAddressNum(e.tagrget.value);
  };

  useEffect(() => {
    getMyAddress();
  }, []);

  // useEffect(() => {}, [myAddressList]);

  // const onClick = (method) => {
  //   setAxiosMethod(method);
  // };

  // const sendAddress = (num) => {
  //   setAddressNum(num);
  // };

  function goMyAddress() {
    window.location.replace("/myaddress");
  }

  function goAddAddress() {
    window.location.replace("/address/search");
  }

  const onClickModify = async (data) => {
    await setAddressNum(data);
    await setOpenModifyModal(!openModifyModal);
  };
  return (
    <div>
      <div className="basic-header-1-wrapper">
        <div
          className="basic-header-1-vector-wrapper"
          onClick={() => navigate("/mypage")}
        >
          <Back />
        </div>
        <div className="basic-header-1-text-wrapper">주소 목록</div>
      </div>
      <div className="mypage-new-address-wrapper">
        <button
          className="mypage-new-address"
          onClick={() => {
            goAddAddress();
          }}
        >
          <div className="mypage-new-address-icon">
            <HiPlus size={"25px"} />
          </div>
          <div className="mypage-new-address-txt">추가</div>
        </button>
      </div>
      {/* <form onSubmit={addressHandleSubmit}>
        <button></button>
      </form> */}
      {myAddressList &&
        myAddressList.map((item, idx) => {
          return (
            <div key={item.addressSeq}>
              <div className="mypage-content-wrapper">
                <div className="mypage-content-address">
                  {item.addressIsPrimary === 1 ? (
                    <div className="mypage-content-address-nick">
                      {item.addressNick} [기본 주소]
                    </div>
                  ) : (
                    <div className="mypage-content-address-nick">
                      {item.addressNick}
                    </div>
                  )}
                  <div className="mypage-content-address-real">
                    {item.addressAddress}
                  </div>
                </div>
                <div className="mypage-content-address-btn-wrapper">
                  <button
                    className="mypage-content-address-btn"
                    onClick={() => {
                      // deleteMyAddress(item.addressSeq);
                      onClickModify(item);
                    }}
                    value={item.addressSeq}
                  >
                    수정
                  </button>
                  {item.addressIsPrimary === 0 ? (
                    <button
                      className="mypage-content-address-btn"
                      onClick={() => {
                        deleteMyAddress(item.addressSeq);
                        // onClickDelete();
                      }}
                      value={item.addressSeq}
                    >
                      삭제
                    </button>
                  ) : null}
                </div>
                {openModifyModal && (
                  <Modal2
                    title="주소 수정"
                    button="✖"
                    closeModal={() => setOpenModifyModal(!openModifyModal)}
                  >
                    <form
                      className="join-input-wrapper"
                      onSubmit={handleSubmit}
                    >
                      <FormControl sx={{ width: "70%" }} variant="standard">
                        <TextField
                          className="input-form-wrapper"
                          id="addressNick"
                          label="주소 별칭"
                          placeholder={addressNum.addressNick}
                          name="addressNick"
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
                      <FormControlLabel
                        id="addressIsPrimary"
                        control={
                          <Checkbox onChange={handleAgree} color="primary" />
                        }
                        label="기본 주소로 설정"
                        margin="normal"
                      />
                      <div>
                        <button
                          onClick={() => {
                            nowSeqIs(item.addressSeq);
                          }}
                        >
                          수정
                        </button>
                      </div>
                      {/* <button onClick={editMyInfo}>수정</button> */}
                    </form>
                  </Modal2>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
