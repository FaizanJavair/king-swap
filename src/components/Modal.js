import React from "react";
import "../styles/Modal.css";
import { Link } from "react-router-dom";
const Modal = ({ close }) => {
  return (
    <div>
      <div className="modal">
        <p className="modal-text">Enter Your Private Key</p>
        <input
          type="text"
          placeholder="RANDOM3348347i2301238"
          className="input-modal"
        ></input>
        <Link to={"/exchange"}>
          <button className="modal-button">Continue</button>
        </Link>
      </div>
      <div className="bg" onClick={() => close()} />
    </div>
  );
};

export default Modal;
