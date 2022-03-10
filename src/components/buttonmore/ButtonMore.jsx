import React from "react";
import "./ButtonMore.sass";
export const ButtonMore = () => {
  return (
    <button className="home-shop__morebutton">
      See more
      <svg
        width="7"
        height="17"
        viewBox="0 0 7 17"
        fill="none"
      >
        <path
          id="Chevron"
          d="M1 1L5.043 8.41667L1 15.8333"
          stroke="#363636"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
