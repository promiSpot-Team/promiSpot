import React, { useState } from "react";
import { Input, InputLabel, IconButton, InputAdornment } from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./InputFormPWD.scss";

export default function InputFormPWD(props) {
  const [passwordState] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <InputLabel htmlFor="standard-adornment-password">
        {props.label}
      </InputLabel>
      <Input
        id={props.id}
        name={props.name}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        margin="dense"
        error={passwordState !== "" || false}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}
