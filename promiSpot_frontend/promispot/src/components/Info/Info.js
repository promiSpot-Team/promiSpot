import React from 'react';
import './Info.scss';
import Profile from '../../images/IU_Profile.jpg';

export default function Info(props) {

  const { date, subject, time } = props;
  return (
    <div className="info-wrapper">
      <div className='info-title-wrapper'>
        <div className='info-title-date-wrapper'>
          {date}
        </div>
        <div className='info-title-subject-wrapper'>
          {subject}
        </div>
      </div>
      <div className='info-time-wrapper'>
        {time}
      </div>
      {/* <div className='info-profile-wrapper'>
        <div className='info-profile-img-wrapper'>
          <img src={Profile} width="300px"/>
        </div>
      </div> */}
    </div>
  )
}
