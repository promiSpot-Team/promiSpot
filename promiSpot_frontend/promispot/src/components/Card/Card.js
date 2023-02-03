import React from 'react'
import './Card.scss';

export default function Card(props) {

  const { date, time, title, imgLink } = props;

  return (
    <div className='card-wrapper'>
      <div className='card-contents-wrapper'>
        <div className='card-top-wrapper'>
          <div className='card-header-wrapper'>
            <div className='card-date-wrapper'>
              {date}
            </div>
            <div className='card-time-wrapper'>
              {time}
            </div>
          </div>
          <div className='card-title-wrapper'>
            {title}
          </div>
        </div>
        <div className='card-img-wrapper'>
          {imgLink}
        </div>
      </div>
        <div className='card-outbtn-wrapper'>
          나가기
        </div>
    </div>
  )
}
