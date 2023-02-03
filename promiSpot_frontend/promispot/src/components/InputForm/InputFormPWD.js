import React, {useState} from 'react'
import {  Input,  InputLabel,  IconButton,  InputAdornment} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './InputFormPWD.scss';

export default function InputFormPWD(props) {

  const { id, label, placeholder } = props;
  const [passwordState] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword_1 = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <InputLabel htmlFor="standard-adornment-password">
        {props.label}
      </InputLabel>
      <Input
        id={props.id}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        margin="dense"
        error={passwordState !== "" || false}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  )
}
