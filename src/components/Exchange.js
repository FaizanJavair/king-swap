import React from "react";
import MiddleCard from "./MiddleCard";
import "../styles/Exchange.css";
import { IoIosLogOut } from "react-icons/io";
import Holding from "./Holding";
import ActiveTrades from "./ActiveTrades";
import { Link } from "react-router-dom";
const Exchange = ({ login }) => {
  return (
    <div className="home">
      <header className="header">
        <img src={"logo.svg"} className="logo" alt="logo" />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="token">
            <span>0xEA589c81d6a7567b5bde8048701E038832fe64w7</span>
            <IoIosLogOut
              size={18}
              className="logout-icon"
              style={{ "margin-left": "10px" }}
            ></IoIosLogOut>
          </div>
        </Link>
      </header>
      <div className="card-div">
        <Holding />
        <MiddleCard login={true} exchange={true} />
        <ActiveTrades />
      </div>
      <footer className="footer">
        <h6 className="footer-text">18540578</h6>
        <div class="square"></div>
      </footer>
    </div>
  );
};

export default Exchange;
