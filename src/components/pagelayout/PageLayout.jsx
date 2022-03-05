import React, { useState } from "react";
import { Header } from "../header/Header";
import { Body } from "../body/Body";
import "./pagelayout.sass";

const PageLayout = () => {
  const [data, setData] = useState({ error: null, isLoaded: false, items: [] });

  const componentDidMount = () => {
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
  };
  componentDidMount();
  console.log(data);

  return (
    <div className="home-shop">
      <Header></Header>
      <Body data={data}></Body>
    </div>
  );
};

export default PageLayout;
