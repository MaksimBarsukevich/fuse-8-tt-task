import React, { useState } from "react";
import "./FilterInput.sass"
export const FilterInput = (props) => {

  

  const inputHadler = (e) => {
      props.setFilter(e.target.value)
  }

  return (
    <label className="home-shop__header-label text">
      Filter
      <input onChange={inputHadler} className="home-shop__header-input" type="text" placeholder="Введите название..." />
    </label>
  );
};
