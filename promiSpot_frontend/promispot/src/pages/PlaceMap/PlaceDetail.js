import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BasicHeader from "../../components/Header/BasicHeader3";
import store from "../../index";
import getDetail from './GetDetail'

export default function PlaceDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const place = location.state;


  // 장소 등록하기를 누르면 지도에 표시하기
  const registerPlaceToMap = () => {
    store.dispatch({
      type: "REGISTER_PLACE_TO_MAP",
      mapCenterPosition: {
        x: parseFloat(place.x),
        y: parseFloat(place.y),
      },
    });
  };

  return (
    <div className="place-modal-wrapper">
      <BasicHeader text={place.place_name} />
      <div>
        <button
          onClick={registerPlaceToMap}
          style={{
            position: "absolute",
            bottom: 0,
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
