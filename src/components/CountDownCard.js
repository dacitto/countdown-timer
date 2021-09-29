import React from "react";

function CountDownCard({ label }) {
  return (
    <div className="CountDownCard">
      <div className="card">
        <div className="card-part top">
          <span className="number">85</span>
        </div>
        <div className="card-part bottom">
          <span className="number">85</span>
        </div>
      </div>
      <h2 className="label">{label}</h2>
    </div>
  );
}

export default CountDownCard;
