import axios from "axios";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function GetDetail(props) {
  var address_name, category_name, phone, place_name, place_url, road_address_name;

  // const [place_url, setplace_url] = useState(null)
  console.log("여기는 props 이다");
  console.log(props);

  if (props.place.address_name) {
    // console.log("1");
    var place = props.place;
    address_name = place.address_name;
    category_name = place.category_name;
    phone = place.phone;
    place_name = place.place_name;
    place_url = place.place_url;
    // road_addres_name = place.placeRoadAddressName
  } else if (props.place.memberSeq) {
    let votePlace = props.place;
    address_name = votePlace.placeAddressName;
    category_name = votePlace.placeCategoryName;
    phone = votePlace.placePhone;
    place_name = votePlace.placeName;
    place_url = votePlace.placeUrl;
    // road_address_name = votePlace.placeRoadAddressName
  }

  // console.log("category_name", category_name);
  // console.log("props", props)
  /* axios 관련 처리 */

  const catergoryList = category_name.split(" > ");
  // console.log("2");
  const [Img, setData] = useState(undefined);
  const [Star, setStar] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const placeUrl = "https://place.map.kakao.com/314463146"

  const sendData = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://i8a109.p.ssafy.io/crawling", {
        // const response = await axios.post("http://localhost:5000/crawling", {
        placeUrl: place_url,
      });
      setData(response.data.placeImg);
      setStar(response.data.placeStar);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // if (place_url) sendData();
    sendData();
  }, []);

  return (
    <div className="place-modal-content-wrapper">
      <div className="place-category-list-wrapper">
        {catergoryList.map((category, idx) => {
          return <div className="category-name-div">{category}</div>;
        })}
      </div>
      <div className="place-detail-wrapper">
        {!loading ? (
          <img className="detail-img" src={Img} alt="img" />
        ) : (
          <div className="detail-loading">
            {/* <h2>로딩중 ... </h2> */}
            <BeatLoader className="detail-loading-icon" color="#36d7b7" />
          </div>
        )}
        <div className="place-detail-txt-wrapper">
          <div className="place-detail-add-wrapper">
            <FaMapMarkerAlt className="place-detail-add-icon" size="15px" color="#b4b4b4" />
            <div className="place-detail-add-txt">{address_name}</div>
          </div>
          <div className="place-detail-tel-wrapper">
            <BsFillTelephoneFill className="place-detail-tel-icon" size="15px" color="#b4b4b4" />
            <div className="place-detail-tel-txt">{phone}</div>
          </div>
          <div className="place-detail-star-wrapper">
            <AiFillStar className="place-detail-star-icon" size="15px" color="#cfc31b" />
            <div className="place-detail-star-txt">평점 : {Star}</div>
          </div>
        </div>
      </div>

      {/* <button
        // onClick={registerPlaceToMap}
        style={{
          position: "absolute",
          bottom: "5vh",
          right: 0,
          backgroundColor: "white",
          border: "1px solid #c4c4c4",
          marginRight: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "15px",
        }}
      >
        등록하기
      </button> */}
    </div>
  );
}
