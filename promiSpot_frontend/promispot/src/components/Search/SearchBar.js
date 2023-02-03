import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar({ GetAxiosResponse, config = null }) {
  const { response, loading, error, operation } = useAxios();
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    e.preventDefault();
    operation({
      ...config, 
      params: {
      ...config.params,
      query: e.target.value}
    });
  }

  useEffect(() => {
    if (response !== null) {
      GetAxiosResponse({ response, loading, error })
    }
  }, [response])

  return (
    <div class="search">
      <input type="text" class="search__input" placeholder="Search..." onKeyUp={onChange}/>
      <div class="search__icon">
        <ImSearch/>
      </div>
</div>
  )
}
