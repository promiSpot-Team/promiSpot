import React from "react";
import { useNavigate } from "react-router-dom";
import Back from '../Icon/Back';
import "./BasicHeader1.scss";

export default function WhiteHeader(props) {

  const navigate = useNavigate();

  const { text } = props;

  return (
    // 뒤로 가기 아이콘 & 제목
    // 로그인, 회원가입, 주소 페이지
    <div className="basic-header-1-wrapper">
      <div className="basic-header-1-vector-wrapper" onClick={() => navigate(-1)}>
        <Back /> 
      </div>
      <div className="basic-header-1-text-wrapper">{text}</div>
    </div>
  );
};

