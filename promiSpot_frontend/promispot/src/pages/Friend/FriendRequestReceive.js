import React, { useEffect, useState } from "react";
import ProfileInfoR from "../../components/ProfileInfo/ProfileInfoR";
import { SERVER_URL } from '../../constants/constants'
import axios from 'axios'
import '../scss/Friend.scss';

export default function FriendRequestReceive() {

  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
        <ProfileInfoR imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
      </div>
    </div>
  );
}
