import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar({ ParentFunction = null }) {
  const [query, setQuery] = useState('');

  const onChange = (e) => {
    setQuery(e.target.value)
    ParentFunction(query)
  }

  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..."
        onChange={onChange}
      />
      <div className="search__icon">
        <ImSearch/>
      </div>
    </div>
  )
}
