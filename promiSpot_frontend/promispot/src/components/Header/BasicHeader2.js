import React from 'react';
import { useNavigate } from "react-router-dom";
import "./BasicHeader2.scss";

export default function LeftHeader(props) {

  const navigate = useNavigate();

  const { text } = props;
  
  return (
    <div className="basic-header-2-wrapper">
      <div className="basic-header-2-text-wrapper">{text}</div>
    </div>
  )
}
