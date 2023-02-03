import React from 'react'
import Card from '../../components/Card/Card'
import '../scss/Promise.scss'

export default function PromiseList() {
  return (
    <div className='promise-list-wrapper'>
      <div className='promise-list-each-wrapper'>
        <Card date="1월 12일, 목요일" time="10:00AM" title="점심팟"/>
      </div>
      <div className='promise-list-each-wrapper'>
        <Card date="1월 19일, 목요일" time="09:00PM" title="저녁팟"/>
      </div>
    </div>
  )
}
