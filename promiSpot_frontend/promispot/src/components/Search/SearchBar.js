import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar({ GetAxiosQuery = null }) {
  const [query, setQuery] = useState('')

  // 값이 입력될 때마다 query값 변경 + query값으로 부모 컴포넌트에 값 전달
  const onChange = (e) => {
    // e.preventDefault()
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (GetAxiosQuery) {
      GetAxiosQuery(query)
    }
  }, [query])

  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..."
        onChange={onChange}
        value={query}
      />
      <div className="search__icon">
        <ImSearch/>
      </div>
    </div>
  )
}
