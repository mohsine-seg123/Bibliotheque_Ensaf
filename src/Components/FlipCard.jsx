import React, { useState } from "react";
import "./FlipCard.css"; // On va créer ce fichier CSS

const FlipCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <img src={data.image} alt={data.name} />
          <h2>{data.name}</h2>
          <p>{data.location}</p>
          <div className="btn_par">
            <button className="reserve-btn">Reserve</button>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          {/* <p>{data.bio}</p> */}
          <div className="infos">
            <p>
              <strong></strong> {data.bio}
            </p>
            <p>Éditions : {data.stats?.["Éditions"]}</p>
            <p>Sujet : {data.stats?.["Sujet"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
