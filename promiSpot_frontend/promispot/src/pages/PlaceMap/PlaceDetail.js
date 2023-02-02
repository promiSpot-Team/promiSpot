import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import store from '../../index'

export default function PlaceDetail(props) {
  const navigate = useNavigate()

  return (
    <div className="place-modal-wrapper">
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  )
}
