import React from 'react'
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import '../scss/Friend.scss';

export default function FriendRequestSend() {
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfoS imgName="PBG_Profile" nickName="보거미" id="PBG"/>
      </div>
    </div>
  )
}
