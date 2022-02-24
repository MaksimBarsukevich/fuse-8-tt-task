import React, { useEffect, useState } from "react";
import { CardLayout } from "../cardlayout/CardLayout";
import "./Body.sass";

export const Body = () => {
  return (
    <main className="home-shop__content">
      <section className="home-shop__content-wrapper">
        <CardLayout></CardLayout>
      </section>
    </main>
  );
};