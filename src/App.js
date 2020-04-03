import React, { useEffect, useState } from "react";
import Includes from "./include";
import Search from "./search";
import Main from "./main";
import HeaderComments from "./headerComments";
import Terminal from "./terminal";
import "./App.css";
require("dotenv/config");

function App() {
  // API key from dotenv
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // states
  const [search, setSearch] = useState("food");
  const [data, setData] = useState([]);
  const [openTerminal, setTerminal] = useState(false);

  // refetch data when rendering
  // [] : fetch only once when refreshing page
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    let url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${search}?key=${APP_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    setData([json]);
    console.log([json]);
  };

  return (
    <div className="App">
      {/* Run button opens Terminal */}
      <div className="page_header">
        <p
          className="run"
          onClick={() => {
            setTerminal(!openTerminal);
          }}
        >
          RUN
        </p>
        <p className="reactionary">Reactionary - Dictionary App</p>
      </div>

      <div className="editor">
        {/* Instructions comment */}
        <HeaderComments />

        {/* #include<dictionary.h>
            #include<stdio.h> // for printf, scanf */}
        <Includes dictionary="<dictionary.h>" print="<stdio.h>" />

        {/* printWord function */}
        <Search openingBrace="{" />

        {/* int main */}
        <Main openingBrace="{" />

        {/* RD */}
        <p className="initials">RD</p>
      </div>

      <div className={openTerminal ? "terminal open" : "terminal close"}>
        <Terminal openTerminal />
      </div>
    </div>
  );
}

export default App;
