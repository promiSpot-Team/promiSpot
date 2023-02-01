import React from 'react';
import {ImSearch} from "react-icons/im";
import './SearchBar.scss';

export default function SearchBar() {
  return (
    <div class="search">
      <input type="text" class="search__input" placeholder="Search..."/>
      <div class="search__icon">
        <ImSearch/>
      </div>
</div>
  )
}
