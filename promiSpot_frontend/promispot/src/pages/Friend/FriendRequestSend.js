import React, { useState, useEffect } from 'react'
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import '../scss/Friend.scss';

export default function FriendRequestSend({ memberSeq }) {
  const [requestFriendList, setRequestFriendList] = useState([]);

  // 현재 유저가 보낸 친구 신청 목록 불러오기
  const getFriendRequestSend = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${memberSeq}/1`,
      })
      console.log("보낸", res)
      if (res.data !== 'fail') {
        setRequestFriendList(res.data)
      }
    } catch(err) {
      setRequestFriendList([])
    }
  }

  useEffect(() => {
    getFriendRequestSend()
  }, [])

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        <ProfileInfoS imgName="PBG_Profile" nickName="보거미" id="PBG"/>
        {requestFriendList && requestFriendList.map((friend, idx) => {
          return (
            <ProfileInfoS 
              key={idx}
              imgName="PBG_Profile" 
              nickName={friend.memberNick} 
              id={friend.memberId}/>
          )
        })}
      </div>
    </div>
  )
}
