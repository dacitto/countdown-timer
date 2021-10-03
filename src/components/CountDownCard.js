import React from "react";
function CountDownCard({ label, time }) {
  return (
    <div className="CountDownCard">
      <div className="card">
        <div className="card-part top">
          <span className="number">{time}</span>
        </div>
        <div className="card-part bottom">
          <span className="number">{time}</span>
        </div>
      </div>
      <h2 className="label">{label}</h2>
    </div>
  );
}

export default CountDownCard;
