import { Button } from "@mui/material";
import React from "react";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import '../scss/Friend.scss';

export default function FriendList() {
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfo imgName="IU_Profile" nickName="국힙원탑" id="IU"/>
      </div>
      <div className='friend-list-each-wrapper'>
      <ProfileInfo imgName="KSH_Profile" nickName="도민준" id="KSH"/>
      </div>
      <div className='friend-list-each-wrapper'>
      <ProfileInfo imgName="KYJ_Profile" nickName="세자빈" id="KYJ"/>
      </div>
      <div className='friend-list-each-wrapper'>
      <ProfileInfo imgName="PBG_Profile" nickName="보거미" id="PBG"/>
      </div>
    </div>
  );
}
