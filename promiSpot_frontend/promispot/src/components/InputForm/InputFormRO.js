import React from 'react'
import {  TextField} from "@mui/material/";
import './InputFormRO.scss';

export default function InputFormRO(props) {

  const { id, label, defaultvalue, type, read } = props;

  return (
    <TextField className='input-form-ro-wrapper'
    noValidate
    autoComplete="off"
      id={props.id}
      label={props.label}
      defaultValue={props.defaultvalue}
      fontFamily="Pretendard-Bold"
      margin="dense"
      InputProps={{
        readOnly: true,
      }}
    />
  )
}
