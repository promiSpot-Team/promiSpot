import React, { useState } from 'react'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from '../../components/Header/BasicHeader1';
import axios from "axios";
import '../scss/Search_Bar.scss'
import '../scss/Address.scss'

export default function AddressSearch() {
  const [addressQeury, setAddress] = useState("");
  const [addressList, setAddressList] = useState([]);

  function getAddressResult() {
    getAddress();
    async function getAddress() {
      try{
        const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${addressQeury}`, {
          headers: {Authorization: `KakaoAK 64bbe2063e9e0b314a6060be44144a26`},
        })
        const newAdressList = response.data.documents.map((address) => {
          return {
            address_name: address.address_name
          }
        })
        setAddressList(newAdressList)
      }
      catch {
        console.log('에러뜸')
      }
    }
  }
  const onChange = (e) => {
    setAddress(e.target.value);
    e.preventDefault()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getAddressResult()
  }

  return (
    <div>
      {/* {addressList.map((address, index) => {
        return (
          <div key={index}>
            <h2>name: {address.address_name}</h2>
          </div>
        )
      })} */}
      <WhiteHeader text="주소 검색"/>
      <div className="search-bar-wrapper" style={{
        textAlign: 'center',
      }}>
        <form onSubmit={onSubmit}
        >
          <input className="search-bar"
          type="text" id="address" value={addressQeury} placeholder="주소" onChange={onChange}/>
          <input type="submit" value="검색"/>

        </form>
      </div>
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