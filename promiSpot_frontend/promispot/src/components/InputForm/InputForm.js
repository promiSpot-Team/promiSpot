import React from 'react'
import {  TextField} from "@mui/material/";
import './InputForm.module.scss';

export default function InputForm(props) {

  const { id, label, placeholder, type, read, getInputPromiseTitle = null } = props;

  const onChange = (e) => {
    getInputPromiseTitle(e.target.value)
  }

  return (
    <TextField className='input-form-wrapper'
      id={props.id}
      label={props.label}
      placeholder={props.placeholder}
      type={props.type}
      multiline
      variant="standard"
      fontFamily="Pretendard-Bold"
      margin="dense"
      onChange={onChange}
    />
  )
}
