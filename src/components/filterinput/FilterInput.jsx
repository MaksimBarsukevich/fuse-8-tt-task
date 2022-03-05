import React from "react";
import "./FilterInput.sass"
export const FilterInput = () => {
  return (
    <label className="home-shop__header-label text">
      Filter
      <input className="home-shop__header-input" type="text" placeholder="Введите название..." />
    </label>
  );
};
