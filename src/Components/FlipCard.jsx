import React, { useState } from "react";
import "./FlipCard.css"; 
import RatingStars from "./RatingStar";
import { useNavigate } from "react-router-dom";

const FlipCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate=useNavigate();
  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={data.image} alt={data.name} />
          <h2>{data.name}</h2>
          <p>{data.location}</p>
          <div className="btn_par">
            <button
              className="reserve-btn"
              onClick={(e) => {
                e.stopPropagation(); 
              navigate("/Reserver");
              }}
            >
              Reserve
            </button>
          </div>
        </div>

        <div className="flip-card-back">
          <div className="infos">
            <p>
              <strong></strong> {data.bio}
            </p>
            <p>Éditions : {data.stats?.["Éditions"]}</p>
            <p>Sujet : {data.stats?.["Sujet"]}</p>
            <div style={{ marginTop: "50px" }}>
              <RatingStars rating={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
