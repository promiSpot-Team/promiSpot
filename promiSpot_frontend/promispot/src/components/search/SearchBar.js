import React, { useEffect, useState } from 'react'
import './searchBar.scss'
import axios from 'axios'


export default function SearchBar() {
  const [catImg, setCatImg] = useState();

  useEffect(() => {
    ChangeCatImg();
  }, [])

  async function ChangeCatImg() {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    setCatImg(response.data[0].url)
  }

  return (
    <div>
      <h2>SearchBar</h2>
        <img src={catImg}></img>
    </div>
  )
}
