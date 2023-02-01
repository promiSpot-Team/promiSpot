import React from "react";
// import BasicHeader2 from '../../components/Header/BasicHeader2';
import TabBar from "../../components/TabBar/TabBar";
import "../scss/Promise.scss";

export default function Promise() {
  return (
    <div>
      <div>약속페이지</div>
      {/* <BasicHeader2 text="내 약속 보기"/> */}
      <TabBar />
    </div>
  );
}
