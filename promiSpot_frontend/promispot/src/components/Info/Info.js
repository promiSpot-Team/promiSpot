import React from "react";
import "./Info.scss";

export default function Info(props) {
  const { date, subject, time } = props;
  return (
    <div className="info-wrapper">
      <div className="info-title-wrapper">
        <div className="info-title-date-wrapper">{date}</div>
        <div className="info-title-subject-wrapper">{subject}</div>
      </div>
      <div className="info-time-wrapper">{time}</div>
    </div>
  );
}
