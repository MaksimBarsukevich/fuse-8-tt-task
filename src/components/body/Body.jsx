import React, { useEffect, useState } from "react";
import { CardLayout } from "../cardlayout/CardLayout";
import "./Body.sass";

export const Body = (props) => {
  return (
    <main className="home-shop__content">
      <section className="home-shop__content-wrapper">
        {props.data.items.map((item) => (
          <CardLayout
            key={item.id}
            address={item.address}
            price={item.price}
            title={item.title}
            type={item.type}
          ></CardLayout>
        ))}
      </section>
    </main>
  );
};
