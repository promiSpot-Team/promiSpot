import React, { useEffect, useState } from "react";
import ProfileInfoR from "../../components/ProfileInfo/ProfileInfoR";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import '../scss/Friend.scss';

export default function FriendRequestReceive({ memberSeq, requestReceiveFriendList }) {
  const [requestFriendList, setRequestFriendList] = useState([]);
  const [isAccept, setIsAccept] = useState(null)
  const [friendRequestSeq, setFriendRequestSeq] = useState(-1)
  const [listIdx, setListIdx] = useState(-1)

  // 친구 요청 승인했을 때 
  const acceptFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/friend/request/${friendRequestSeq}`
      })
      delete requestReceiveFriendList[listIdx]
      setRequestFriendList(requestReceiveFriendList)
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
  const IsAcceptOrReject = ({isAccept, friendRequestSeq, listIdx}) => {
    console.log('??????')
    setIsAccept(isAccept)
    setFriendRequestSeq(friendRequestSeq)
    setListIdx(listIdx)
  }

  useEffect(() => {
    setRequestFriendList(requestReceiveFriendList)
  }, [])

  useEffect(() => {
    console.log(requestFriendList)
  }, [requestFriendList])
  
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
        {requestReceiveFriendList && requestReceiveFriendList.map((friend, idx) => {
          return (
            <ProfileInfoR 
              key={idx}
              // 수락인지 거절인지 true/false 판단하는 함수 
              IsAcceptOrReject={() => IsAcceptOrReject(idx)} 
              friendRequestSeq={friend.friendRequestSeq}
              listIdx={listIdx}
              imgName="KYJ_Profile" 
              nickName={friend.memberNick} 
              id={friend.memberId}/>
          )
        })}
      </div>
    </div>
  );
}
