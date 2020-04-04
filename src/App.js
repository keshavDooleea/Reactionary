import React, { useEffect, useState } from "react";
import Includes from "./include";
import Search from "./search";
import Main from "./main";
import HeaderComments from "./headerComments";
import Terminal from "./terminal";
import "./App.css";

function App() {
  // states
  const [openTerminal, setTerminal] = useState(false);

  // open/close terminal
  function toggleTerminal() {
    setTerminal(!openTerminal);
    document.getElementsByClassName("input_text")[0].focus();
  }

  return (
    <div className="App">
      {/* Run button opens Terminal */}
      <div className="page_header">
        <p className="run" onClick={toggleTerminal}>
          RUN
        </p>
        <p className="reactionary">Reactionary - Dictionary App</p>
      </div>

      <div className="editor" onClick={() => setTerminal(false)}>
        {/* Instructions comment */}
        <HeaderComments />

        {/* #include<dictionary.h>
            #include<stdio.h> // for printf, scanf */}
        <Includes dictionary="<dictionary.h>" print="<stdio.h>" />

        {/* defineWord function */}
        <Search openingBrace="{" />

        {/* int main */}
        <Main openingBrace="{" />

        {/* RD */}
        <p className="initials">RD</p>
      </div>

      <div className={openTerminal ? "terminal open" : "terminal close"}>
        <p className="close_btn" onClick={toggleTerminal}>
          X
        </p>

        <Terminal />
      </div>
    </div>
  );
}

export default App;
