import { Navigate } from 'react-router-dom'
import React from 'react'

export default function NotFound() {

  // const moveToMain = () => {
  //   setTimeout(() => {
  //     console.log('??')
  //     Navigate('/main')
  //   }, 3000)
  // }

  // React.useEffect(() => {
  //   moveToMain()
  // }, [])

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', color: '#c4c4c4',}}>
      <h1>PAGE NOT FOUND</h1>
    </div>
  )
}