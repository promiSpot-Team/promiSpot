import React from 'react';
import './Modal.scss';

export default function Modal(props) {

  function closeModal() {
    props.closeModal();
    console.log("hello");
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}
