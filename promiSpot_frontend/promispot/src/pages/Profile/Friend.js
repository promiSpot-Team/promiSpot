import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function () {
  return (
    <div>
      <h1>친구 목록</h1>
      <Link to={"list"}>친구 리스트</Link>
      <hr></hr>
      <Outlet />
    </div>
  )
}
