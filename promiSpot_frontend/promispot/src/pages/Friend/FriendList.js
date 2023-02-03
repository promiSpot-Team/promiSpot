import { Button } from "@mui/material";
import React from "react";
import ProfileInfoB from "../../components/ProfileInfo/ProfileInfoB";
import '../scss/Friend.scss';

export default function FriendList() {
  return (
    <div className="friend-list-wrapper">
      <div className='friend-list-each-wrapper'>
      <ProfileInfoB imgName="IU_Profile" nickName="국힙원탑" id="IU"/>
      </div>
      <div className='friend-list-each-wrapper'>
      <ProfileInfoB imgName="KSH_Profile" nickName="도민준" id="KSH"/>
      </div>
    </div>
  );
}
