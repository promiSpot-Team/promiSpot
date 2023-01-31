import React from "react";
import "./BasicButton.scss";

export default function BasicButton(props) {

  const { text, onClick } = props;

  return (
    // 버튼 : 이름(상위에서 받는 걸로 설정), click
    <button className="basicButton" onClick={onClick}>
      {text}
    </button>
  );
};
