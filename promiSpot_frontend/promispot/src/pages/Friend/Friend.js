import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import BasicHeader from "../../components/Header/BasicHeader2";
// import SelectBar from "../../components/SelectBar/SelectBar";
import TabBar from "../../components/TabBar/TabBar";

export default function Friend() {
  return (
    <div>
      <BasicHeader text="친구 목록"></BasicHeader>
      {/* <SelectBar /> */}
      <Link to={"/friend/list"} className="link">
        <div>친구 목록</div>
      </Link>
      <Link to={"/friend/receive"} className="link">
        <div>받은 요청</div>
      </Link>
      <Link to={"/friend/send"} className="link">
        <div>보낸 요청</div>
      </Link>
      <TabBar />
    </div>
  );
}
