import React from "react";
import TabBar from "../../components/TabBar/TabBar";
import '../scss/MyPage.scss'

export default function MyPage() {
  return (
    <div className="mypage">
      <div className="header">
        <div className="img"></div>
        <div className="text">이름</div>
        <div className="update-text">
          <p>편집</p>
        </div>
      </div>
      <div className="content">
        <div className="address" style={{ borderBottom: '1px solid #c4c4c4'}}>
          <p>서울특별시 강남구 테헤란로 212</p>
          <p>멀티캠퍼스 역삼</p>
        </div>
        <div className="address">
          <p>닉네임</p>
          <p>닉네임</p>
        </div>
        <div className="address">
          <p>아이디</p>
          <p>아이디</p>
        </div>
        <div className="email"></div>
      </div>
      <div className="logout-btn">

      </div>
      <TabBar />
    </div>
  );
}
