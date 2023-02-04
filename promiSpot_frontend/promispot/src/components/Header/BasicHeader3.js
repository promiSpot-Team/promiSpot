import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "../Icon/Back";
import "./BasicHeader3.scss";

export default function BasicHeader3(props) {
  const navigate = useNavigate();

  const { text } = props;

  return (
    // 뒤로 가기 아이콘 & 제목
    // 로그인, 회원가입, 주소 페이지
    <div className="basic-header-3-wrapper">
      <div
        className="basic-header-3-vector-wrapper"
        onClick={() => navigate(-1)}
      >
        <Back />
      </div>
      <div className="basic-header-3-text-wrapper">{text}</div>
    </div>
  );
}
