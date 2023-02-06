import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProfileInfoB from "../../components/ProfileInfo/ProfileInfoB";
import '../scss/Friend.scss';
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import { useSelector } from "react-redux";

export default function FriendList({ memberSeq }) {
  const [friendList, setFriendList] = useState(null)
  // const memberSeq = useSelector(state => state?.currentUserInfo?.memberSeq ? state.currentUserInfo.memberSeq : 0)

  const getFriendList = async () => {
    
  // 유저의 친구 목록 불러오기
    const response = await axios({
      url: `${SERVER_URL}/friends/${memberSeq}`,
      method: 'GET',
    })
    setFriendList(response.data)
  }

  const HandleInputFocus = () => {
    // console.log(data)
  }

  useEffect(() => {
    getFriendList()
  }, [])

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfoB imgName="IU_Profile" nickName="국힙원탑" id="IU"/>
      </div>
      <div className='friend-list-each-wrapper'>
      <ProfileInfoB imgName="KSH_Profile" nickName="도민준" id="KSH"/>
      </div>
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
