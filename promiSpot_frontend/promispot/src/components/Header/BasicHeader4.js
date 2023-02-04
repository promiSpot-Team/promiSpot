import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasicHeader4.scss";

export default function BasicHeader3(props) {
  const { text } = props;

  return (
    // 뒤로 가기 아이콘 & 제목
    // 로그인, 회원가입, 주소 페이지
    <div className="basic-header-4-wrapper">
      <div className="basic-header-4-text-wrapper">{text}</div>
    </div>
  );
}
