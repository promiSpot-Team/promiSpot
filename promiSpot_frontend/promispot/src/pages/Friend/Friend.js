import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import BasicHeader1 from "../../components/Header/BasicHeader1";
// import SelectBar from "../../components/SelectBar/SelectBar";
import TabBar from "../../components/TabBar/TabBar";
import FriendList from "./FriendList";
import '../scss/Friend.scss';

export default function Friend() {
  return (
    <>
    <BasicHeader1 text="친구 목록"/>
    <div className="friend-wrapper">
      <div className="friend-content-wrapper">
        <FriendList/>
      </div>
    </div>
      <TabBar />
      </>
  );
}
