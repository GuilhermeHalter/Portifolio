import React from "react";
import { Outlet } from "react-router-dom";

import HeaderComp from "./components/HeaderComp";

import './App.css';

function App() {
  return (
    <>
      <HeaderComp />
      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
