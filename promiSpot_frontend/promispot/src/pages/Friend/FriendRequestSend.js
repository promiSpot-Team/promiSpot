import React, { useState, useEffect } from 'react'
import ProfileInfoS from '../../components/ProfileInfo/ProfileInfoS'
import axios from 'axios'
import { SERVER_URL } from '../../constants/constants'
import '../scss/Friend.scss';

export default function FriendRequestSend({ memberSeq }) {

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        <ProfileInfoS imgName="PBG_Profile" nickName="보거미" id="PBG"/>
      </div>
    </div>
  )
}
