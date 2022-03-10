import React, { useState, useEffect } from "react";
import { Header } from "../header/Header";
import { Body } from "../body/Body";
import "./pagelayout.sass";

const PageLayout = () => {
  const [data, setData] = useState({ error: null, isLoaded: false, items: [] });

  const [filter, setFilter] = useState('')
  
  
  useEffect(() => {
    if (!data.isLoaded) {
      fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
        .then((res) => res.json())
        .then(
          (result) => {
            setData({ isLoaded: true, items: result });
          },
          (error) => {
            setData({ isLoaded: true, error });
          }
        );
    }
  });

  return (
    <div className="home-shop">
      <Header setFilter={setFilter}></Header>
      <Body data={data} filter={filter}></Body>
    </div>
  );
};

export default PageLayout;
