import React from "react";
import "./Modal2.scss";

export default function Modal2(props) {
  const { title, button } = props;

  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="new-promise-text-wrapper">{title}</div>
        <button id="modalCloseBtn" onClick={closeModal}>
          {button}
        </button>
        {props.children}
      </div>
      <div className="new-promise-under-btn-wrapper">
        <button>다음</button>
      </div>
    </div>
  );
}
