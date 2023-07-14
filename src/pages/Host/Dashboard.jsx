import React from "react";
import { Outlet } from "react-router-dom";

const Dasboard = () => {
  return (
    <div>
      <h1>dashboard, how are you doing</h1>
      <Outlet />
    </div>
  );
};

export default Dasboard;
