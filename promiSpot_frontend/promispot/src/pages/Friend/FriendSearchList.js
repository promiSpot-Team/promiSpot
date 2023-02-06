import React from 'react'
import ProfileInfoSR from "../../components/ProfileInfo/ProfileInfoSR";
import '../scss/Friend.scss'

export default function FriendSearchList() {
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfoSR imgName="KYJ_Profile" nickName="검색결과입니다" id="KYJ"/>
      </div>
    </div>
  )
}
