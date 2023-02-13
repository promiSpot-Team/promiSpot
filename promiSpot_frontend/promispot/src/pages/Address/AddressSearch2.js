import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WhiteHeader from "../../components/Header/BasicHeader1";
import SearchBar from "../../components/Search/SearchBar2";
import {
  KAKAO_MAP_URL,
  KAKAO_REST_API_KEY,
  SERVER_URL,
} from "../../constants/constants";
import { setAddress } from "../../Redux/reducer/user";
import "../scss/Address.scss";
import "../scss/Search_Bar.scss";

export default function AddressSearch() {
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { memberSeq } = useSelector((state) => state.user.info);

  /* /hooks/useAxios.js 에서 axios의 response 값을 가져오는 함수 */
  const GetAxiosResponse = ({ response, error, loading }) => {
    if (response?.data?.documents) {
      setAddressList(response.data.documents);
    }
  };

  /* /hooks/useAxios.js로 보내는 config 객체 선언 */
  const config = {
    method: "GET",
    baseURL: `${KAKAO_MAP_URL}/v2/local/search/address`,
    headers: {
      // Host: `${KAKAO_MAP_HOST}`,
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
    },
  };

  /* 리덕스(/reduer/map)에 주소 정보 저장 */
  const saveAddressInfo = (address) => {
    const addressInfo = {
      addressAddress: address.address.address_name,
      addressX: address.address.x,
      addressY: address.address.y,
    };
    dispatch(setAddress(addressInfo));
    // navigate(-1);
    addAddress(address);
  };

  const addAddress = async ({ address }) => {
    try {
      // console.log(address);
      const response4 = await axios({
        url: "/address",
        method: "POST",
        baseURL: SERVER_URL,
        data: {
          memberSeq,
          addressAddress: address.address_name,
          addressX: address.address.x,
          addressY: address.address.y,
          addressNick: "주소",
          addressIsPrimary: "0",
        },
      });
      // dispatch(setAddress(null));

      navigate("/myaddress");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <WhiteHeader text="주소 검색" />
      <SearchBar GetAxiosResponse={GetAxiosResponse} config={config} />
      <div className="address-result-top-div">
        <p>검색 결과</p>
      </div>
      <hr />
      <ul className="address-result-ul">
        {addressList.map((address, index) => {
          return (
            <li
              key={index}
              className="address-result-li"
              onClick={() => {
                saveAddressInfo({ address });
              }}
            >
              <p className="address-result-text">{address.address_name}</p>
              <button className="address-result-btn">선택</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
