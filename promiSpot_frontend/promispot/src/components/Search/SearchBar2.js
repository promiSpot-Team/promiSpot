import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import "./SearchBar2.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import BasicButton from "../Buttons/BasicButton";
import { useAxios } from "../../hooks/useAxios";

const SearchBar2 = forwardRef(({ onClick, GetAxiosResponse, config }, ref) => {
  const { response, loading, error, operation } = useAxios();
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value)
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
  
  useImperativeHandle(ref, () => ({
    whileDragMapHandle
  }))

  function whileDragMapHandle() {
    operation({
      ...config, 
      params: {
      ...config.params,
      query}
    });
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
              label="장소 입력"
              placeholder="검색어를 입력하세요"
              multiline
              variant="standard"
              fontFamily="Pretendard-Bold"
              margin="normal"
              onChange={onChange}
            />
            {/* <BasicButton text="검색" /> */}
          </FormControl>
    </div>
  );
});

export default SearchBar2

// export default function SearchBar ({ onClick, GetAxiosResponse, config }, ref) {
//   const { response, loading, error, operation } = useAxios();
//   console.log('ref', ref)
//   // const [data, setData] = useState({})

//   const onChange  = (e) => {
//     e.preventDefault();
//     operation({
//       ...config, 
//       params: {
//       ...config.params,
//       query: e.target.value}
//     });
//   }

//   useEffect(() => {
//     if (response !== null) {
//       GetAxiosResponse({ response, loading, error })
//     }
//   }, [response])

//   return (
//     <div>
//       <FormControl
//             sx={{ m: 1, width: "70%" }}
//             variant="standard"
//             margin="normal"
//           >
//             <TextField
//               id="outlined-basic"
//               label="주소 입력"
//               placeholder="지명, 도로명, 건물명을 입력하세요"
//               multiline
//               variant="standard"
//               fontFamily="Pretendard-Bold"
//               margin="normal"
//               onKeyUp={onChange}
//             />
//             {/* <BasicButton text="검색" /> */}
//           </FormControl>
//     </div>
//   );
// }