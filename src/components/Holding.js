import React from "react";
import "../styles/Holding.css";

const holdingData = [
  {
    id: 1,
    currency: "BTC",
    holding: "999,400",
    estimated: "153.20",
    icon: "bitcoin.svg",
  },
  {
    id: 2,
    currency: "ETH",
    holding: "0.3",
    estimated: "672.32",
    icon: "eth.svg",
  },
  {
    id: 3,
    currency: "USDT",
    holding: "73",
    estimated: "72.32",
    icon: "tether.svg",
  },
];

const Holding = () => {
  return (
    <div className="holding-container">
      <header className="heading">
        <div className="title">
          <p>Holding</p>
        </div>

        <div className="value">
          <h2 className="total">$1,125</h2>
          <span className="estimated">Estimated Value</span>
        </div>
      </header>

      {holdingData.map(function (val, index) {
        return (
          <div className="list">
            <div className="curr-title">
              <img src={val.icon} width={25} height={25} alt="Currency Icon" />
              <p className="value-text">{val.currency}</p>
            </div>

            <div className="curr-value">
              <h2 className="curr-total">{val.holding}</h2>
              <span className="curr-estimated">${val.estimated}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Holding;
