import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import "./SearchBar2.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../Buttons/BasicButton";
import { useAxios } from "../../hooks/useAxios";
import {ImSearch} from "react-icons/im";

const SearchBar2 = forwardRef(({ onClick, GetAxiosResponse, config }, ref) => {
  const { response, loading, error, operation } = useAxios();
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
    if (query !== '') {
      operation({
        ...config, 
        params: {
        ...config.params,
        query: e.target.value}
      });
    }
  }
 

  useEffect(() => {
    if (response !== null) {
      GetAxiosResponse({ response, loading, error })
    }
  }, [response])
  
  useImperativeHandle(ref, () => ({
    whileDragMapHandle
  }))

  function whileDragMapHandle() {
    if (query !== '') {
      operation({
      ...config, 
      params: {
        ...config.params,
        query}
      });
    }
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
  );
});

export default SearchBar2