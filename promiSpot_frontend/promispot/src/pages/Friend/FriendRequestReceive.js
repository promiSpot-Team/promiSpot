import React, { useEffect, useState } from "react";
import ProfileInfoR from "../../components/ProfileInfo/ProfileInfoR";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import '../scss/Friend.scss';

export default function FriendRequestReceive({ memberSeq }) {
  const [requestFriendList, setRequestFriendList] = useState([]);

  // 현재 유저에게 온 친구 신청 목록 불러오기
  const getFriendRequest = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${memberSeq}/0`,
      })
      setRequestFriendList(res)
    } catch(err) {

    }
  }

  const acceptFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/friend/request/`
      })
    } catch (err) {

    }
  }
  useEffect(() => {

  })
  
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfoR imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
      </div>
    </div>
  );
}
