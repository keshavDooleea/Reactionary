import React, { useEffect, useState } from "react";
import Includes from "./include";
import Search from "./search";
import Main from "./main";
import Header from "./header";
import HeaderComments from "./headerComments";
import "./App.css";
require("dotenv/config");

function App() {
  // API key from dotenv
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // states
  const [search, setSearch] = useState("food");
  const [data, setData] = useState([]);

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
    console.log("json");
  };

  return (
    <div className="App">
      <Header />

      <HeaderComments />

      <Includes dictionary="<dictionary.h>" print="<stdio.h>" />

      <Search openingBrace="{" />

      <Main openingBrace="{" />

      {/* <div className="up">
        <ol>
          {data.map(item =>
            item.map(search => <li key={search.meta.id}>{search.meta.id}</li>)
          )}
        </ol>

        <div>
          {data.map(item =>
            item.map(search =>
              search.shortdef.map(def => <p key={def}>{def}</p>)
            )
          )}
        </div>
      </div> */}

      <p className="initials">RD</p>
    </div>
  );
}

export default App;
