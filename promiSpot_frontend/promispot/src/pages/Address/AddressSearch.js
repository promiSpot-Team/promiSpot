import React, { useState } from 'react'
import SearchBar from '../../components/Search/SearchBar'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from '../../components/Header/WhiteHeader';
import axios from "axios";

export default function AddressSearch() {
  const [addressQeury, setAddress] = useState("");
  const [addressList, setAddressList] = useState({});

  const onChange = (e) => {
    setAddress(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getAddress();
    async function getAddress() {
      const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${addressQeury}`, {
        headers: {Authorization: `KakaoAK 64bbe2063e9e0b314a6060be44144a26`},
      })
      // var newAddressList = [];
      // response.data.documents.map((res, idx) => {
      //   newAddressList.push({
      //     id: idx
      //   })
      // })
      // setAddressList(newAddressList);
      // console.log(addressList)
    } 
  }

  return (
    <div>
      <WhiteHeader text="주소 검색"/>
      <div style={{
        textAlign: 'center',
      }}>
        <form onSubmit={onSubmit}
        >
          <input style={{
            width: "90%",
            borderRadius: "30px",
            padding: "10px",
          }} 
          type="text" id="address" value={addressQeury} placeholder="주소" onChange={onChange}/>
          <input type="submit" value="검색"/>

        </form>
      </div>
      <div style={{
        width: "93%",
        margin: "3% auto"
      }}>
        <p style={{
          fontSize: "13px",
          color: "gray"
        }}>검색 결과</p>
      </div>
      <hr />
      {addressList.map((address, idx)=> 
        <div key={idx} style={{
          width: "93%",
          margin: "5% auto",
          display: "grid", 
          gridTemplateColumns: "8fr 2fr"
        }}>
          <p>
            {address}
          </p>
          <button>
            선택
          </button>
        </div> 
      )}
    </div>
  )
}