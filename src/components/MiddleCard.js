import React from "react";
import { useState } from "react";
import "../styles/MiddleCard.css";
import InputField from "./InputField";
import { GoGear } from "react-icons/go";
import Modal from "./Modal";

const MiddleCard = ({ login, exchange }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {open && <Modal close={handleClose}></Modal>}
      <div className="card-two">
        {exchange ? (
          <header className="card-two-exchange">
            <div className="card-logo">
              <img
                src={"logo.svg"}
                className="logo-small-exchange"
                alt="logo"
              />
              <h3 className="head-text">KingSwap</h3>
            </div>
            <div className="slippage">
              <span className="slip-text">
                <b>MevSafe</b> 50% Slippage
              </span>
              <GoGear size={16} color="#B69FFF" />
            </div>
          </header>
        ) : (
          <header className="card-two-header">
            <img src={"logo.svg"} className="logo-small" alt="logo" />
            <h3 className="head-text">KingSwap</h3>
          </header>
        )}

        <div className="card-two-body">
          <InputField
            label="You pay"
            value="2.35"
            currency="ETH"
            green={false}
          />
          <div className="swap-icon">
            <img src="fox.svg" className="swap-icon-size" alt="Swap Icon" />
          </div>
          <InputField
            label="You receive"
            value="0"
            currency="SELECT"
            green={true}
          />
          {!login ? (
            <button
              className="generate-key-btn"
              onClick={() => handleOpen()}
              style={{ border: "0px" }}
            >
              Generate Private Key
            </button>
          ) : (
            <button className="select-token-btn">Select a Token</button>
          )}
        </div>
      </div>
    </>
  );
};

export default MiddleCard;
