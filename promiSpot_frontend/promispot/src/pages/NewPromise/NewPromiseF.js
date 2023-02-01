import React from 'react'
import SearchBar from '../../components/Search/SearchBar'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import '../scss/NewPromise.scss'

export default function NewPromiseF() {
  return (
    <div className='new-promise-wrapper'>
      <div className='new-promise-text-wrapper'>
        새로운 약속 생성
      </div>
      <div className='new-promise-search-wrapper'>
      <SearchBar/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo/>
      </div>
      <div className='new-promise-profile-wrapper'>
      <ProfileInfo/>
      </div>
    </div>
  )
}
