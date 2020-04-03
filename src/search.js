import React from "react";
import "./App.css";

function Search(props) {
  return (
    <div className="search">
      <p>
        <span className="comments"> // displays word on screen</span>
      </p>

      <p>
        {/* void printWord(char** buffer) { */}
        <span className="function_type">void </span>
        <span className="function_name">printWord</span>
        <span className="function_symbols">(</span>
        <span className="function_type">char** </span>
        <span className="function_text">buffer</span>
        <span className="function_symbols">) </span>
        <span className="function_braces">{props.openingBrace}</span>
      </p>

      <p className="main_p">
        {/* printf("%s\n", *buffer"); */}
        <span className="function_name">printf</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_symbols">"</span>
        <span className="function_string">%s\n</span>
        <span className="function_symbols">", </span>
        <span className="function_text">*buffer</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
      </p>

      <p className="main_p">
        {/* free(*buffer); */}
        <span className="function_name">free</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_text">*buffer</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
        <span className="comments"> // clears buffer</span>
      </p>

      <p>
        {/* } */}
        <span className="function_braces">}</span>
      </p>
    </div>
  );
}

export default Search;
