import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BasicHeader from "../../components/Header/BasicHeader3";
import getDetail from "./GetDetail";
import { setPlace } from "../../Redux/reducer/map";
import { useDispatch } from "react-redux";
import GetDetail from "./GetDetail";

export default function PlaceDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state;
  const dispatch = useDispatch();

  console.log(place);
  /* 장소 '등록하기' 버튼 누르면 지도에 등록하면서 약속 장소 후보로 등록 */
  const registerPlaceToMap = () => {
    dispatch(setPlace(place));

    console.log(place);

    // store.dispatch({
    //   type: "REGISTER_PLACE_TO_MAP",
    //   mapCenterPosition: {
    //     x: parseFloat(place.x),
    //     y: parseFloat(place.y),
    //   },
    // });
  };

  return (
    <div className="place-modal-wrapper">
      <div style={{ height: "9vh" }}>
        <BasicHeader text={place.place_name} />
      </div>
      <div>
        <GetDetail place={place} />
        <button
          onClick={registerPlaceToMap}
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
        </button>
      </div>
    </div>
  );
}
