import React from "react";
import "./header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 title="Header" className="header">
        {title}
      </h1>
      {/* <h3 data-testid="header-2" className="header">Hello</h3> */}
    </>
  );
}
