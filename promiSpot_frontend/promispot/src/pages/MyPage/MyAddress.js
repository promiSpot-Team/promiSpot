import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import { useSelector } from "react-redux";
import Modal2 from "../../components/Modal/Modal2";
import { HiPlus } from "react-icons/hi";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Back from "../../components/Icon/Back";
import "../scss/MyPage.scss";

export default function MyAddress() {
  const navigate = useNavigate();

  const { memberSeq, addressSeq } = useSelector((state) => state.user.info);

  const [addressNum, setAddressNum] = useState();
  const [myAddressList, setMyAddressList] = useState([]);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleAgree = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifyData = new FormData(e.currentTarget);
    const data = {
      addressNick: modifyData.get("addressNick"),
      addressIsPrimary: checked === false ? 0 : 1,
    };
    modifyMyAddress(data);
  };

  const handleChange_addressSeq = (e) => {
    e.preventDefault();
    setAddressNum(e.tagrget.value);
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

  const onClickModify = async (data) => {
    await setAddressNum(data);
    await setOpenModifyModal(!openModifyModal);
  };

  useEffect(() => {
    getMyAddress();
  }, []);

  // 주소 검색 페이지로 이동
  function goAddAddress() {
    window.location.replace("/address/search");
  }

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
                          margin="dense"
                        ></TextField>
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
                        <button>수정</button>
                      </div>
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
