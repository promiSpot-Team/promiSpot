import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useAxios } from "../../hooks/useAxios";
import "./SearchBar2.scss";

const SearchBar2 = forwardRef(({ onClick, GetAxiosResponse, config }, ref) => {
  const { response, loading, error, operation } = useAxios();
  const [query, setQuery] = useState('')

  /* input 값이 변화할 때마다 axios 요청 */
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
  } 

  /* query 값이 변할 때만 axios 요청 */
  useEffect(() => {
    if (query !== '') {
      operation({
        ...config, 
        params: {
        ...config.params,
        query}
      });
    }
  }, [query])

  /* axios의 response 값이 변화할 때만 부모 컴포넌트에 결과값 넘겨주기 */
  useEffect(() => {
    if (response !== null) {
      GetAxiosResponse({ response, loading, error })
    }
  }, [response])
  
  /* 이하 지도가 드래그 될 때 실행되는 함수들 */ 
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