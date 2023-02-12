import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import ProfileInfoS from "../../components/ProfileInfo/ProfileInfoS";
import { useSelector, useDispatch } from "react-redux";
import { reissueToken } from "../../Redux/reducer/user";
import "../scss/MyPage.scss";
import BasicHeader from "../../components/Header/BasicHeader1";

export default function MyAddress() {
  const [myAddressList, setMyAddressList] = useState([]);
  const [axiosMethod, setAxiosMethod] = useState("");
  const [addressNum, setAddressNum] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memberSeq, addressSeq } = useSelector((state) => state.user.info);

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
      const response2 = await axios({
        method: axiosMethod,
        url: `${SERVER_URL}/address/${addressSeq}`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const modifyAddress = async (addressSeq) => {
    try {
      const response3 = await axios({
        method: axiosMethod,
        url: `${SERVER_URL}/address/${addressSeq}`,
        data: {
          addressIsPrimary: 1,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange_addressSeq = (e) => {
    e.preventDefault();
    setAddressNum(e.tagrget.value);
  };

  useEffect(() => {
    getMyAddress();
  }, []);

  useEffect(() => {}, [myAddressList]);

  useEffect(() => {
    if (axiosMethod === "DELETE") {
      deleteMyAddress();
    } else if (axiosMethod === "PUT") {
      modifyAddress();
    }
  }, [axiosMethod]);

  const onClick = (method) => {
    setAxiosMethod(method);
  };

  const sendAddress = (num) => {
    setAddressNum(num);
  };

  function goMyAddress() {
    window.location.replace("/myaddress");
  }

  return (
    <div>
      <BasicHeader text="주소 목록"></BasicHeader>
      <Link to='/address/search'>
        <button>추가</button>
      </Link>
      {myAddressList &&
        myAddressList.map((item, idx) => {
          return (
            <div key={idx}>
              <div></div>
              <div>
                {item.addressNick}
                {item.addressAdress}
                <button
                  onClick={() => {
                    onClick("DELETE");
                    deleteMyAddress(item.addressSeq);
                    goMyAddress();
                  }}
                  value={item.addressSeq}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    onClick("POST");
                    deleteMyAddress(item.addressSeq);
                  }}
                >
                  수정
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
