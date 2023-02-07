import React, { useState, useEffect } from 'react';
import MiniButton from '../Buttons/MiniButton';
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import './ProfileInfoR.scss';

export default function ProfileInfo(props) {

  const {imgName, nickName, id} = props;
  const imgUrl = "/images/" + imgName + ".jpg";
  const [isAccept, setIsAccept] = useState(null)

  const acceptFriendRequest = async () => {
    try {
      const response = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/friend/request/${props.friendRequestSeq}`
      })
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  }

  const rejectFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: `${SERVER_URL}/friend/request/${props.friendRequestSeq}`
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const acceptRequest = () => {
    setIsAccept(true)
  }

  useEffect(() => {
    if (isAccept == true) {
      acceptFriendRequest()
    }
  }, [isAccept])

  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-img-wrapper'>
        <div className='profile-info-img'>
        <img src={imgUrl} alt = {imgName} title = {imgName} width="40px"/></div>
      </div>
      <div className='profile-info-name-wrapper'>
        <div className='profile-info-nickname-wrapper'>{nickName}</div>
        <div className='profile-info-id-wrapper'>{id}</div>
      </div>
      <div className='profile-info-button-wrapper'>
        <div className='profile-info-button' onClick={acceptRequest}><MiniButton text="수락"/></div>
        <div className='profile-info-button'><MiniButton text="거절"/></div>
        
      </div>
    </div>
  )
}
