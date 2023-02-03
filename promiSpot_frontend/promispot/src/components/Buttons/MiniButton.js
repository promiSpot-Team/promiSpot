import React from 'react'
import './MiniButton.scss'

export default function MiniButton(props) {

  const { text } = props;
  return (
    <button className="miniButton">
      {text}
    </button>
  )
}
