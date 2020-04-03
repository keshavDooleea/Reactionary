import React from "react";
import "./App.css";

function Header() {
  const run = () => {
    console.log("Sw");
  };
  return (
    <div className="page_header">
      <p className="run" onClick={run}>
        Run
      </p>
      <p className="reactionary">Reactionary - Dictionary App</p>
    </div>
  );
}

export default Header;
