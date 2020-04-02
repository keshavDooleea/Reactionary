import React, { useEffect, useState } from "react";
import "./App.css";
require("dotenv").config();

function App() {
  // API key from dotenv
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // states
  const [search, setSearch] = useState("meat");
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
    console.log(json);
  };

  return (
    <div className="App">
      <div className="header"></div>

      <ol>
        {data.map(item => (
          <li key={item[0].meta.id}>{item[0].meta.id}</li>
        ))}
      </ol>

      <div>
        {data.map(item => (
          <p key={item[0].shortdef[0]}>{item[0].shortdef[0]}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
