import React, { useState, useEffect } from 'react'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../../components/Buttons/BasicButton";
import WhiteHeader from '../../components/Header/BasicHeader1';
import SearchBar from '../../components/Search/SearchBar2';
import { KAKAO_MAP_URL, KAKAO_REST_API_KEY } from '../../constants/constants'
import '../scss/Search_Bar.scss'
import '../scss/Address.scss'
import { setAddress } from '../../reducer/user'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function AddressSearch() {
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const GetAxiosResponse = ({ response, error, loading }) => {
    if (response?.data?.documents) {
      setAddressList(response.data.documents)
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

  const saveAddressInfo = (address) => {
    const addressInfo = {
      addressAddress: address.address.address_name,
      addressX: address.address.x,
      addressY: address.address.y,
    }
    dispatch(setAddress(addressInfo))
    navigate('/join2')
  }

  useEffect(() => {
    return () => {
      console.log('bye')
    }
  })
  return (
    <div>
      <WhiteHeader text="주소 검색"/>
      <SearchBar GetAxiosResponse={GetAxiosResponse} config={config}/>
      <div className="address-result-top-div">
        <p>검색 결과</p>
      </div>
      <hr />
      <ul className='address-result-ul'>
        {addressList.map((address, index) => {
          return (
            <li key={index} className='address-result-li' onClick={() => saveAddressInfo({address})}>
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