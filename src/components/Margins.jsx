import React from "react";
import '../styles/margins.scss';

function Margins({ propClass, children }) {
  return <div className={`margins-container layout-container ${propClass?? ""}`}>{children}</div>;
}

export default Margins;
