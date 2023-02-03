import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import BasicHeader from '../../components/Header/BasicHeader1'

export default function PlaceDetail(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const place = location.state

  return (
    <div className="place-modal-wrapper">
      <BasicHeader text={place.place_name} />
      <div>
        <button style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #c4c4c4',
          marginRight: '1rem',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          borderRadius: '15px',
        }}>
          등록하기
        </button>
      </div>
    </div>
  )
}
