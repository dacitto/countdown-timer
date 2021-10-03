import React from "react";
import CountDownCard from "./CountDownCard";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <h2>Welcome to our website</h2>;
  } else {
    // Render a countdown
    return (
      <>
        <CountDownCard label="days" time={days}></CountDownCard>
        <CountDownCard label="hours" time={hours}></CountDownCard>
        <CountDownCard label="minuts" time={minutes}></CountDownCard>
        <CountDownCard label="seconds" time={seconds++}></CountDownCard>
      </>
    );
  }
};
const CardsGrid = () => {
  return (
    <div className="container">
      <Countdown date={Date.now() + 8640000000} renderer={renderer} />
    </div>
  );
};

export default CardsGrid;
