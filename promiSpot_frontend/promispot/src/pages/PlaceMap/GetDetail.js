import axios from 'axios'
import { useState, useEffect } from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export default function GetDetail(props) {
  const { address_name, category_name, phone, place_name, place_url, road_addres_name } = props.place
  // console.log("props", props)
  /* axios 관련 처리 */
  console.log(category_name.split(' > '))
  const [Img, setData] = useState(undefined)
  const [Star, setStar] = useState(undefined)
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const placeUrl = "https://place.map.kakao.com/314463146"
 
  const sendData = async () => {
    try{
      setLoading(true)
      const response = await axios.post('http://localhost:5000', {placeUrl: place_url})
      setData(response.data.placeImg) 
      setStar(response.data.placeStar) 
    } catch(err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    sendData()
  }, [])

  return (
    <div>
      <div style={{ margin: '0 auto', width: '85%', display: 'grid', 
        gridTemplateColumns: '3.5fr 8.5fr' 
      }}> 
        {!loading ?
          <div style={{ border: '1px solid red' }}>
            <img style={{ borderRadius: "3vw", width: '20vw', height: '20vw'}} src={Img} alt="img" />
          </div>
          :
          <div style={{ width: '100%', textAlign: 'center'}}>
            <h2>로딩중 ... </h2>
            <BeatLoader color="#36d7b7" />
          </div>
        }
        <div style={{ border: '1px solid blue' }}>
          <div>{category_name}</div>
          <div>{address_name}</div>
          <div>{phone}</div>
          <div>평점 : {Star}</div>
        </div>
      </div>  
    </div>
  )
}