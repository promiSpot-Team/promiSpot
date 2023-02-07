import React from 'react';
import './Modal.scss';

export default function Modal(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
      <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
        <div className='new-promise-under-btn-wrapper' >
          <button >다음</button>
        </div>
    </div>
  );
}
