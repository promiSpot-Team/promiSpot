import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar({ GetAxiosQuery = null, HandleInputFocus = null, clearQuery = null }) {
  const [query, setQuery] = useState('')

  // 값이 입력될 때마다 query값 변경 + query값으로 부모 컴포넌트에 값 전달
  const onChange = (e) => {
    // e.preventDefault()
    setQuery(e.target.value)
    GetAxiosQuery(e.target.value)
  }

  // input창이 포커스 됐을 때 부모컴포넌트에 true값 넘겨줌
  const onFocus = () => {
    HandleInputFocus(true)
  }

  // input창에서 포커스 아웃 됐을 때 부모컴포넌트에 false값 넘겨줌
  const onBlur = () => {
    // HandleInputFocus(false)
  }

  // 부모 컴포넌트에서 검색결과창을 닫았을 때 input칸에 있는 단어들 지우기 위해
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
