import React, { useState } from "react";
import Info from "../../components/Info/Info";
import TabBar from "../../components/TabBar/TabBar";
import "../scss/Main.scss";

export default function Main() {
  return (
    <>
      <div className="main-info-wrapper">
        <Info date="1/12" subject="점심팟" time="10:00AM" />
      </div>
      <div className="main-img">
        <img src={require("../../images/Roadmap.png")} width="300px" />
      </div>
      <TabBar />
    </>
  );
}
