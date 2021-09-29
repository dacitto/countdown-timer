import React from "react";
import CountDownCard from "./CountDownCard";

const CardsGrid = () => {
  return (
    <div className="container">
      <CountDownCard label="days"></CountDownCard>
      <CountDownCard label="hours"></CountDownCard>
      <CountDownCard label="minuts"></CountDownCard>
      <CountDownCard label="seconds"></CountDownCard>
    </div>
  );
};

export default CardsGrid;
