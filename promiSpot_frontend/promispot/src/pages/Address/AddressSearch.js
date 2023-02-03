import React, { useState } from 'react'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from '../../components/Header/BasicHeader1';
import SearchBar from '../../components/Search/SearchBar2';
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constans/kakaomap'
import '../scss/Search_Bar.scss'
import '../scss/Address.scss'

export default function AddressSearch() {
  const [addressList, setAddressList] = useState([]);

  const GetAxiosResponse = (data) => {
    if (data?.response?.documents) {
      setAddressList(data.response.documents)
    }
  }

  const config = {
    method: 'GET', 
    baseURL: `${KAKAO_MAP_URL}/v2/local/search/address`,
    headers: {
      // Host: `${KAKAO_MAP_HOST}`,
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`
    },
  }

  return (
    <div>
      <WhiteHeader text="주소 검색"/>
      {/* <div className="search-bar-wrapper" style={{
        textAlign: 'center',
      }}>
        <form onSubmit={onSubmit}
        >
          <input className="search-bar"
          type="text" id="address" value={addressQeury} placeholder="주소" onChange={onChange}/>
          <input type="submit" value="검색"/>

        </form>
      </div> */}
      <SearchBar GetAxiosResponse={GetAxiosResponse} config={config}/>
      <div className="address-result-top-div">
        <p>검색 결과</p>
      </div>
      <hr />
      <ul className='address-result-ul'>
        {addressList.map((address, inx) => {
          return (
            <li className='address-result-li'>
              <p className='address-result-text'>
                {address.address_name}
              </p>
              <button className='address-result-btn'>
                선택
              </button>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}