import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Body } from "../body/Body";
import "./pagelayout.sass";

const PageLayout = () => {
  return (
    <div className="home-shop">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

export default PageLayout;
