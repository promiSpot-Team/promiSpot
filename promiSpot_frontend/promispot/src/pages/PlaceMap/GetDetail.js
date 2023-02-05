import axios from 'axios'
import cheerio from 'cheerio'

export default function GetDetail() {
  
  // const placeURL = 'https://place.map.kakao.com/m/314463146'
  // const placeURL = 'https://place.map.kakao.com/314463146'

  function EventThumbnailNew(props) {

    async function getHTMLolive(){
        try{
            const res = await axios.get('https://place.map.kakao.com/314463146')
            console.log(res.data)          
        } catch (error){
            console.log(error);
        }
    }
    getHTMLolive()
  }

  EventThumbnailNew()
  return (
    <div>
      <h2>asdf</h2>
    </div>
  )
}