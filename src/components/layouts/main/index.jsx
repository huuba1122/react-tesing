import React from "react";
// import { Outlet } from "react-router-dom";
import "./main.css";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      {/* <div className="main-header">
        <h2 className="main-title">Todo App</h2>
      </div> */}
      {/* <div className="main-sidebar"></div> */}
      <div className="main-content">{children}</div>
      {/* <div className="main-footer">Footer</div> */}
    </div>
  );
}
