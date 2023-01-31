import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../Buttons/BasicButton";

export default function SearchBar({ onClick, changeQuery }) {
  const onChange = (e) => {
    changeQuery(e.target.value);
  }

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
              onChange={onChange}
            />
            <BasicButton text="검색" />
          </FormControl>
    </div>
  );
}
