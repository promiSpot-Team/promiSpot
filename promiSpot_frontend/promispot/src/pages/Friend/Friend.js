import React from "react";
import { Link, Outlet } from "react-router-dom";
import TabBar from "../../components/TabBar/TabBar";

export default function Friend() {
  return (
    <div>
      {/* <h1>친구 목록</h1>
      <Link to={"list"}>친구 리스트</Link> */}
      {/* <hr></hr>
      <Outlet /> */}
      <div>친구페이지</div>
      <TabBar />
    </div>
  );
}
