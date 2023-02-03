import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';
import { useEffect, useState } from 'react'; 
import { useAxios } from '../../hooks/useAxios';

export default function SearchBar() {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search..."/>
      <div className="search__icon">
        <ImSearch/>
      </div>
    </div>
  )
}
