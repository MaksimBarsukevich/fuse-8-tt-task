import React from "react";
import "./CardLayout.sass";

export const CardLayout = (props) => {

  const cardClickHadler = () => {
    window.location.href = window.location.href+"details"+"/"+props.id
  }
  
  return (
    <div onClick={cardClickHadler} className="home-shop__card">
      <img
        className="home-shop__card-image "
        src="https://via.placeholder.com/300x150/FF0000/FFFFFF?text=title"
        alt="home photo"
      ></img>
      <p
        className={`home-shop__card-type ${
          props.type != "IndependentLiving" ? "orange-label" : "green-label"
        }`}
      >
        {props.type}
      </p>

      <div className="home-shop__card-textwrapper">
        <p className="home-shop__card-title">{props.title}</p>
        <p className="home-shop__card-address">{props.address}</p>
        <p className="home-shop__card-price">
          New Properties for Sale from <strong>£{props.price}</strong>
        </p>
        <p className="home-shop__card-maybeShoudBeButton">
          Shared Ownership Available
        </p>
      </div>
    </div>
  );
};
