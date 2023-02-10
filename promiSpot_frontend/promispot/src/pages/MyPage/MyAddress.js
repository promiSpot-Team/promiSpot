import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";
import { SERVER_URL } from "../../constants/constants";
import ProfileInfoS from "../../components/ProfileInfo/ProfileInfoS";
import { useSelector, useDispatch } from "react-redux";
import { reissueToken } from "../../reducer/user";
import "../scss/MyPage.scss";

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
        console.log("is in?");
        setMyAddressList(response1.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMyAddress = async () => {
    try {
      const response2 = await axios({
        method: axiosMethod,
        url: `${SERVER_URL}/address/${addressSeq}`,
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
    }
  }, [axiosMethod]);

  const onClick = (method) => {
    setAxiosMethod(method);
  };

  function goAddress() {
    window.location.replace("/address/search");
  }

  return (
    <div>
      {myAddressList &&
        myAddressList.map((item, idx) => {
          return (
            <div key={idx}>
              {item.addressAdress}
              <button
                onClick={() => {
                  onClick("DELETE");
                  handleChange_addressSeq();
                }}
                value={item.addressSeq}
              >
                삭제
              </button>
              <button>기본 주소로 설정</button>
            </div>
          );
        })}
    </div>
  );
}
