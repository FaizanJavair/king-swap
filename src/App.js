import "./App.css";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exchange" element={<Exchange />}></Route>
      </Routes>
    );
  }
}

export default App;
