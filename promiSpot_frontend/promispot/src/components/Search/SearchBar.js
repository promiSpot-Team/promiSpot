import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar({ GetAxiosQuery = null, HandleInputFocus = null, clearQuery = null }) {
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    e.preventDefault()
    if (e.target.value !== '') {
      setQuery(e.target.value)
      GetAxiosQuery(e.target.value)
    }
  }

  const onFocus = () => {
    HandleInputFocus(true)
  }

  const onBlur = () => {
    // HandleInputFocus(false)
  }

  useEffect(() => {
    setQuery('')
  }, [clearQuery])

  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..."
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={query}
      />
      <div className="search__icon">
        <ImSearch/>
      </div>
    </div>
  )
}
