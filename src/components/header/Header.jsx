import React from "react";
import { FilterInput } from "../FilterInput/FilterInput";
import "./Header.sass";
export const Header = () => {
  return (
    <header className="home-shop__header">
      <h1 className="home-shop__header-title">Our Latest Developments</h1>
      <FilterInput></FilterInput>
    </header>
  );
};
