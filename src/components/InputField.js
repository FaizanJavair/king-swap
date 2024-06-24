import React from "react";
import "../styles/InputField.css";

const InputField = ({ label, value, currency, green }) => {
  return (
    <div className="input-container">
      <span className="label">{label}</span>

      <div className="inner-container">
        <input type="text" value={value} className="num-input" />
        {!green ? (
          <div className="currency">
            <div className="currencyValue">
              <img src="eth.svg" className="currency-icon" alt="Eth Icon" />

              <span className="currency-text">{currency}</span>
            </div>

            <img src="white-down-line.png" alt="Dropdown Icon" />
          </div>
        ) : (
          <div className="green-currency">
            <span className="green-currency-text">{currency}</span>
            <img src="down-line.png" alt="Dropdown Icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
