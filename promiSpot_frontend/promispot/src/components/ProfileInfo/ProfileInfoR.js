import React, { useState, useEffect } from 'react';
import MiniButton from '../Buttons/MiniButton';
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import './ProfileInfoR.scss';

export default function ProfileInfo(props) {

  const {imgName, nickName, id} = props;
  const imgUrl = "/images/" + imgName + ".jpg";
  const [isFinish, setIsFinish] = React.useState(false)

  const acceptFriendRequest = async() => {
    try {
      const res = await axios({
        method: 'PUT',
        url: `${SERVER_URL}/friend/request/${props.friendRequestSeq}`
      })
      // setRequestFriendList(requestReceiveFriendList)
      console.log(res)
    } catch (err) {
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
    if (props.IsAcceptOrReject) {
      props.IsAcceptOrReject({
        isAccept: true, 
        friendRequestSeq: props.friendRequestSeq,
      })
      setIsFinish(true)
    }
  }

  const rejectRequest = () => {
    if (props.IsAcceptOrReject) {
      props.IsAcceptOrReject({
        isAccept: false, 
        friendRequestSeq: props.friendRequestSeq,
      })
      setIsFinish(true)
    }
  }

  useEffect(() => {
    if (isFinish === true) {
      acceptFriendRequest()
    } else if (isFinish === false) {
      rejectFriendRequest()
    }
  }, [isFinish])

  if (isFinish) {
    return null
  }

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
        <div className='profile-info-button' onClick={setIsFinish(true)}><MiniButton text="수락"/></div>
        <div className='profile-info-button' onClick={setIsFinish(false)}><MiniButton text="거절"/></div>
        
      </div>
    </div>
  )
}
