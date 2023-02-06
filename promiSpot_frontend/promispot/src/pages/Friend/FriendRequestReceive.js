import React, { useEffect, useState } from "react";
import ProfileInfoR from "../../components/ProfileInfo/ProfileInfoR";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import '../scss/Friend.scss';

export default function FriendRequestReceive({ memberSeq }) {
  const [requestFriendList, setRequestFriendList] = useState([]);
  const [isAccept, setIsAccept] = useState(null)
  const [friendRequestSeq, setFriendRequestSeq] = useState(-1)

  // 현재 유저에게 온 친구 신청 목록 불러오기
  const getFriendRequestReceive = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `${SERVER_URL}/friend/${memberSeq}/0`,
      })
      if (res.data !== 'fail') {
        setRequestFriendList(res.data)
      }
    } catch(err) {
      setRequestFriendList([])
    }
  }

  // 친구 요청 승인했을 때 
  const acceptFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/friend/request/${friendRequestSeq}`
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // 친구 요청 거절했을 때
  const rejectFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: `${SERVER_URL}/friend/request/${friendRequestSeq}`
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // <MiniButton>에서 승인/거절 버튼 눌렀을 때 각각 값 state에 저장
  const IsAcceptOrReject = ({isAccept, friendRequestSeq}) => {
    setIsAccept(isAccept)
    setFriendRequestSeq(friendRequestSeq)
  }
  
  // 페이지 불러올 때 유저에게 들어온 친구 요청 목록 불러오기
  useEffect(() => {
    getFriendRequestReceive()
  }, [])

  // 수락 -> true -> 친구 신청 승인 
  // 거절 -> false -> 친구 신청 거절
  useEffect(() => {
    if (isAccept === true) {
      acceptFriendRequest()
    } else if (isAccept === false) {
      rejectFriendRequest()
    }
  }, [isAccept])

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        <ProfileInfoR IsAcceptOrReject={IsAcceptOrReject} friendRequestSeq={35} imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
        {requestFriendList && requestFriendList.map((friend, idx) => {
          <ProfileInfoR 
            key={idx}
            // 수락인지 거절인지 true/false 판단하는 함수 
            IsAcceptOrReject={IsAcceptOrReject} 
            friendRequestSeq={friend.friendRequestSeq}
            imgName="KYJ_Profile" 
            nickName={friend.memberNick} 
            id={friend.memberId}/>
        })}
      </div>
    </div>
  );
}
