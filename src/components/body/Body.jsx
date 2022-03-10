import React, { useEffect, useState } from "react";
import { ButtonMore } from "../buttonmore/buttonMore";
import { CardLayout } from "../cardlayout/CardLayout";
import "./Body.sass";

export const Body = (props) => {
  return (
    <main className="home-shop__content">
      <section className="home-shop__content-wrapper">
        {props.data.items
          .filter((item) => {
            if (props.filter.length < 3) return true
              return item.title
                .toLowerCase()
                .includes(props.filter.toLowerCase());
          })
          .map((item) => (
            <CardLayout
              key={item.id}
              id={item.id}
              address={item.address}
              price={item.price}
              title={item.title}
              type={item.type}
            ></CardLayout>
          ))}
      </section>
      <ButtonMore></ButtonMore>
    </main>
  );
};
