import React, { useEffect, useState, useRef } from "react";
import "./App.css";
require("dotenv/config");

function Output() {
  // API key from dotenv
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // states
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [dataFetched, setDataFetch] = useState(false);

  // refetch data when rendering
  // [] : fetch only once when refreshing page
  // [search] : only when search is modified
  useEffect(() => {
    getRequest();
  }, [search]);

  const getRequest = async () => {
    let url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${search}?key=${APP_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    setData([json]);
    setDataFetch(true);
    // console.log([json]);
  };

  // autofocus On on input
  function isTyping(e) {
    setTyping(e.target.value);
  }

  // set the focus to input when clicked on container
  const panelClicked = (e) => {
    document.getElementsByClassName("input_text")[0].focus();
  };

  // enter key is pressed
  const h = (e) => {
    e.preventDefault();
    setSearch(typing);
    document.getElementsByClassName("input_text")[0].focus();
  };

  // search for word def
  const Definitions = () => {
    const [array, setArray] = useState([]);

    // verify if word exists
    if (dataFetched) {
      data.map((item) => {
        item.map((word) => {
          if (word.hasOwnProperty("shortdef")) {
            word.shortdef.map((def) => {
              array.push(def);
            });
          }
        });
      });
    }

    // no word found
    if (dataFetched && array.length == 0) {
      //array.push("error");

      // push suggestions
      data.map((item) => {
        item.map((suggestion) => {
          array.push(suggestion);
        });
      });
      // array.splice(Math.floor(array.length / 2), array.length);

      // no suggestions foud
      if (array.length == 0) {
        return (
          <div>
            <p className="error_msg">error: no words or suggestions found!</p>
          </div>
        );
      }

      // print suggestions
      else {
        return (
          <div>
            <p className="error_msg">error: no words found!</p>
            <p className="suggestion">
              Try these suggestions instead:{" "}
              {array.map((item) => (
                <span key={item}>{item} </span>
              ))}
            </p>
          </div>
        );
      }
    }

    if (dataFetched) {
      return (
        <div>
          <div className="definition">
            <p>Definition: </p>
            <ol className="definition_ol">
              {array.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="definition">
            <p>Synonym: </p>
            <ol className="synonym_ol">
              {data.map((array) =>
                array[0].meta.syns.map((syn) =>
                  syn.map((item) => <li key={item}>{item} </li>)
                )
              )}
            </ol>
          </div>
        </div>
      );
    }

    return <span></span>;
  };

  return (
    <div className="tab_panel" onClick={panelClicked}>
      <div className="output">
        <div className="command">
          <form onSubmit={h}>
            c:\dooleea\reactionary>
            <input
              type="text"
              className="input_text"
              spellCheck="false"
              value={typing}
              onChange={isTyping}
            />
          </form>
        </div>

        <Definitions />
      </div>
    </div>
  );
}

export default Output;
