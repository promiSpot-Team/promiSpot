import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileInfoB from "../../components/ProfileInfo/ProfileInfoB";
import '../scss/Friend.scss';
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import { useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs";

export default function FriendList({ memberSeq }) {
  const [friendList, setFriendList] = useState([])

  const getFriendList = async () => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/friends/${memberSeq}`
      })
      console.log("내 친구 목록 조회하기 ", response)
      setFriendList(response.data)
    } catch(err) {
      if (err.response.status === 404) {
        console.log('404에러')
      }
    }
  }

  useEffect(() => {
    getFriendList()
  }, [])

  return (
    <div className="friend-list-wrapper">
      
      {/* 더미 데이터 */}
      {/* <div className='friend-list-each-wrapper'>
        <ProfileInfoB imgName="IU_Profile" nickName="국힙원탑" id="IU"/>
      </div>
      <div className='friend-list-each-wrapper'>
        <ProfileInfoB imgName="KSH_Profile" nickName="도민준" id="KSH"/>
      </div> */}

      {friendList && friendList.map((friend, idx) => {
        return (
          <ProfileInfoB 
            key={idx}
            imgName="KSH_Profile" 
            nickName={friend.memberNick} 
            id={friend.memberId}/>
        )
      })}
    </div>
  );
}
