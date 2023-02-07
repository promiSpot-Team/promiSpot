import React, { useEffect, useState } from "react";
import ProfileInfoR from "../../components/ProfileInfo/ProfileInfoR";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import '../scss/Friend.scss';

export default function FriendRequestReceive({ memberSeq }) {
  const [friendRequestList, setFriendRequestList] = useState(null)

  console.log()
  // 받은 친구 요청 가져오기
  const getFriendRequestList = async () => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/${memberSeq}/0`
      })
      setFriendRequestList(response.data)
      console.log(response.data)
    } catch(err) {
      setFriendRequestList(null)
      console.log(err)
    }
  }

  useEffect(() => {
    getFriendRequestList() 
  }, [])

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        <ProfileInfoR imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
        {friendRequestList && friendRequestList.map((friend, idx) => {
          return (
            <ProfileInfoR imgName="KYJ_Profile" 
              nickName={friend.memberNick} 
              id={friend.memberId}
              friendRequestSeq={friend.friendRequestSeq}/>
          )
        })}
      </div>
    </div>
  );
}
