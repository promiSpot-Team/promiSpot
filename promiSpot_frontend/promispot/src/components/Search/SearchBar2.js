import React, { useEffect, useState } from "react";
import "./SearchBar2.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../Buttons/BasicButton";
import { useAxios } from "../../hooks/useAxios";

export default function SearchBar({ onClick, GetAxiosResponse, config }) {
  const { response, loading, error, operation } = useAxios();
  // const [data, setData] = useState({})

  const onChange  = (e) => {
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
    <div>
      <FormControl
            sx={{ m: 1, width: "70%" }}
            variant="standard"
            margin="normal"
          >
            <TextField
              id="outlined-basic"
              label="주소 입력"
              placeholder="지명, 도로명, 건물명을 입력하세요"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="normal"
              onKeyUp={onChange}
            />
            {/* <BasicButton text="검색" /> */}
          </FormControl>
    </div>
  );
}
