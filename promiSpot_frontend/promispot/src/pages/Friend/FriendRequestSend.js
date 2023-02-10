import React, { useState, useEffect } from 'react'
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import '../scss/Friend.scss';

export default function FriendRequestSend({ memberSeq }) {
  const [friendRequestList, setFriendRequestList] = useState(null)
  
  /* 보낸 친구 요청 가져오기 */
  const getSendFriendRequest = async () => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/${memberSeq}/1`
      })
      setFriendRequestList(response.data)
      console.log(response.data)
    } catch(err) {
      setFriendRequestList(null)
      console.log(err)
    }
  }

  useEffect(() => {
    getSendFriendRequest() 
  }, [])
 
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        {/* <ProfileInfoS imgName="PBG_Profile" nickName="보거미" id="PBG"/> */}
        {friendRequestList && friendRequestList.map((friend, idx) => {
          return (
            <ProfileInfoS 
              key={idx}
              imgName="PBG_Profile" 
              nickName={friend.memberNick} 
              id={friend.memberId}
              friendRequestMember={friend.memberSeq}/>
          )
        })}
      </div>
    </div>
  )
}
