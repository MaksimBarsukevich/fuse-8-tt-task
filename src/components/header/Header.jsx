import React from "react";
import { FilterInput } from "../FilterInput/FilterInput";
import "./Header.sass";
export const Header = (props) => {
  return (
    <header className="home-shop__header">
      <h1 className="home-shop__header-title">Our Latest Developments</h1>
      <FilterInput setFilter={props.setFilter}></FilterInput>
    </header>
  );
};
