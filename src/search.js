import React from "react";
import "./App.css";

function Search(props) {
  return (
    <div className="search">
      <p>
        <span className="comments"> // displays word on screen</span>
      </p>

      <p>
        {/* void defineWord(char** buffer) { */}
        <span className="function_type">void </span>
        <span className="function_name">defineWord</span>
        <span className="function_symbols">(</span>
        <span className="function_type">char** </span>
        <span className="function_text">buffer</span>
        <span className="function_symbols">) </span>
        <span className="function_braces">{props.openingBrace}</span>
      </p>

      <p className="main_p">
        {/* char* definition = malloc(sizeof(char)); */}
        <span className="function_type">char* </span>
        <span className="function_text">definition </span>
        <span className="function_symbols_parentheses">= </span>{" "}
        <span className="function_name">malloc</span>
        <span className="function_symbols_parentheses">(</span>
        <span className="function_name">sizeof</span>
        <span className="function_symbols_parentheses">(</span>
        <span className="function_type">char</span>
        <span className="function_symbols_parentheses">)</span>
        <span className="function_symbols_parentheses">)</span>
        <span className="function_symbols">;</span>
      </p>

      <p className="break"></p>

      <p className="main_p">
        {/* definition = dictionary_definition(*buffer); */}
        <span className="function_text">definition</span>
        <span className="function_symbols"> = </span>
        <span className="function_name">dictionary_definition</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_text">*buffer</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
      </p>

      <p className="main_p">
        {/* printf("%s\n", *definition); */}
        <span className="function_name">printf</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_symbols">"</span>
        <span className="function_string">%s\n</span>
        <span className="function_symbols">", </span>
        <span className="function_text">*definition</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
      </p>

      <p className="main_p">
        {/* free(*buffer); free(*definition); */}
        <span className="function_name">free</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_text">*buffer</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>

        <span className="function_name"> free</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_text">*definition</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>

        <span className="comments"> // deallocates memory</span>
      </p>

      <p>
        {/* } */}
        <span className="function_braces">}</span>
      </p>
    </div>
  );
}

export default Search;
