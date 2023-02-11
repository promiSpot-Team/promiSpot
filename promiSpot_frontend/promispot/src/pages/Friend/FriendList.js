import axios from 'axios';
import React, { useEffect, useState } from "react";
import ProfileInfoB from "../../components/ProfileInfo/ProfileInfoB";
import { SERVER_URL } from '../../constants/constants';
import '../scss/Friend.scss';

export default function FriendList({ memberSeq }) {
  const [friendList, setFriendList] = useState([])

  /* 내 친구 목록 불러오기 */
  const getFriendList = async () => {
    try {
      const response = await axios({
        method: 'GET', 
        url: `${SERVER_URL}/friend/friends/${memberSeq}`
      })
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

  console.log('asdf', friendList)

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
            imgUrl={friend.memberImgPath} 
            nickName={friend.memberNick} 
            id={friend.memberId}/>
        )
      })}
    </div>
  );
}
