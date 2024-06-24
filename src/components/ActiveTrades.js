import React from "react";
import "../styles/ActiveTrades.css";
const tradeData = [
  {
    id: 1,
    currency: "ETH",
    return_mult: 3,
    entry_holding: 0.1,
    entry_estimated: 153.2,
    current_holding: 0.32,
    current_estimated: 153.2,
  },
  {
    id: 2,
    currency: "BTC",
    return_mult: 0,
    entry_holding: 0.1,
    entry_estimated: 153.2,
    current_holding: 0.32,
    current_estimated: 153.2,
  },
];
const ActiveTrades = () => {
  return (
    <div className="trading-container">
      <header className="heading">
        <p>Active Trades</p>
      </header>
      <div className="title-small">
        <p className="col-val">ENTRY</p>
        <p className="col-val">CURRENT</p>
      </div>
      {tradeData.map(function (val, index) {
        return (
          <div className="list">
            <div className="entry">
              <h2 className="entry-total">{val.entry_holding}</h2>
              <span className="entry-estimated">${val.entry_estimated}</span>
            </div>
            <div className="currency-section">
              <p className="val-text">{val.currency}</p>
              {val.return_mult > 0 ? (
                <div
                  className="multiplier"
                  style={{ "background-color": "#51FF9F26" }}
                >
                  <p className="mult-text" style={{ color: "#51FF9F" }}>
                    {val.return_mult}X
                  </p>
                </div>
              ) : (
                <div
                  className="multiplier"
                  style={{ "background-color": "#FFFFFF26" }}
                >
                  <p className="mult-text" style={{ color: "white" }}>
                    {val.return_mult}X
                  </p>
                </div>
              )}
            </div>

            <div className="current">
              <h2 className="current-total">{val.current_holding}</h2>
              <span className="current-estimated">
                ${val.current_estimated}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveTrades;
