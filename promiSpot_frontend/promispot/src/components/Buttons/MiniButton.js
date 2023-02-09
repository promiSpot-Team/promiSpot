import React from 'react'
import { BsNutFill } from 'react-icons/bs';
import './MiniButton.scss'

export default function MiniButton(props) {  
  const { text } = props

  return (
    <button className="miniButton">
      {text}
    </button>
  )
}
