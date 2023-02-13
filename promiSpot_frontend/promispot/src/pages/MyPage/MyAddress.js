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

export default function MyAddress() {
  const [myAddressList, setMyAddressList] = useState([]);
  const [axiosMethod, setAxiosMethod] = useState("");
  const [addressNum, setAddressNum] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memberSeq, addressSeq } = useSelector((state) => state.user.info);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);

  const addressInfo = useSelector((state) =>
    state?.user?.addressInfo ? state.user.addressInfo : null
  );
  // console.log(addressInfo);

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
      console.log(addressSeq);
      console.log(axiosMethod);
      const response2 = await axios({
        method: "DELETE",
        url: `${SERVER_URL}/address/${addressSeq}`,
      });
      window.location.replace("/myaddress");
    } catch (err) {
      console.log(err);
    }
  };

  const modifyMyAddress = async (addressSeq) => {
    try {
      const response3 = await axios({
        method: "PUT",
        url: `${SERVER_URL}/address/${addressSeq}`,
        data: {
          addressIsPrimary: 1,
        },
      });
      window.location.replace("/myaddress");
    } catch (err) {
      console.log(err);
    }
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

  useEffect(() => {}, [myAddressList]);

  // const onClick = (method) => {
  //   setAxiosMethod(method);
  // };

  const sendAddress = (num) => {
    setAddressNum(num);
  };

  function goMyAddress() {
    window.location.replace("/myaddress");
  }

  function goAddAddress() {
    window.location.replace("/address/search");
  }

  const onClickDelete = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const onClickModify = () => {
    setOpenModifyModal(!openModifyModal);
  };

  return (
    <div>
      <BasicHeader text="주소 목록"></BasicHeader>
      <button
        onClick={() => {
          goAddAddress();
        }}
      >
        추가
      </button>
      {/* <form onSubmit={addressHandleSubmit}>
        <button></button>
      </form> */}
      {myAddressList &&
        myAddressList.map((item, idx) => {
          return (
            <div key={idx}>
              <div></div>
              <div>
                {item.addressNick}
                {item.addressAddress}
                <button
                  onClick={() => {
                    // deleteMyAddress(item.addressSeq);
                    onClickDelete();
                  }}
                  value={item.addressSeq}
                >
                  삭제
                </button>
                {openDeleteModal && (
                  <Modal2
                    title="삭제"
                    button="✖"
                    closeModal={() => setOpenDeleteModal(!openDeleteModal)}
                  >
                    <div>삭제하시겠습니까?</div>
                    <button
                      onClick={() => {
                        deleteMyAddress(item.addressSeq);
                      }}
                    >
                      제출
                    </button>
                  </Modal2>
                )}
                <button
                  onClick={() => {
                    // deleteMyAddress(item.addressSeq);
                    onClickModify();
                  }}
                  value={item.addressSeq}
                >
                  수정
                </button>
                {openDeleteModal && (
                  <Modal2
                    title="주소 수정"
                    button="✖"
                    closeModal={() => setOpenModifyModal(!openModifyModal)}
                  >
                    {/* {myInfoList &&
            myInfoList.map((item, idx) => {
              return (
                <div key={idx}>
                  <form className="join-input-wrapper" onSubmit={handleSubmit}>
                    <FormControl sx={{ width: "70%" }} variant="standard">
                      <TextField
                        className="input-form-wrapper"
                        id="addressNick"
                        label="주소 별칭"
                        placeholder={item.memberInfo.memberNick}
                        name="addressNick"
                        multiline
                        variant="standard"
                        fontFamily="Pretendard-Bold"
                        // defaultValue={item.memberInfo.memberNick}
                        margin="dense"
                        // defaultValue={item.memberInfo.memberNick}
                        // onChange={handleEditChange}
                      >
                         <div onClick={clearText}>삭제</div>
                      </TextField>
                    </FormControl>
                    <div onClick={goMyPage}>
                      <button>수정</button>
                    </div>
                    <button onClick={editMyInfo}>수정</button>
                  </form>
                </div>
              );
            })} */}
                    <button
                      onClick={() => {
                        modifyMyAddress(item.addressSeq);
                      }}
                    >
                      제출
                    </button>
                  </Modal2>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
