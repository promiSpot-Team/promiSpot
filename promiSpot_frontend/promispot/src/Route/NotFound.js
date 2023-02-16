import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/main')
    }, 3000)
  })
  
  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', color: '#c4c4c4',}}>
      <h1>PAGE NOT FOUND</h1>
    </div>
  )
}