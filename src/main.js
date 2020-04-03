import React from "react";
import "./App.css";

function Main(props) {
  return (
    <div className="main">
      <p>
        {/* int main(int argc, char* argv[]) { */}
        <span className="function_type">int </span>
        <span className="function_name">main</span>
        <span className="function_symbols">(</span>
        <span className="function_type">int </span>
        <span className="function_text">argc</span>
        <span className="function_symbols">, </span>
        <span className="function_type">char* </span>
        <span className="function_text">argv</span>
        <span className="function_symbols_parentheses">[]</span>
        <span className="function_symbols">) </span>
        <span className="function_braces">{props.openingBrace}</span>
      </p>

      <p className="main_p">
        {/* char* array = malloc(sizeof(char)); */}
        <span className="function_type">char* </span>
        <span className="function_text">array </span>
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
        {/* printf("Enter your word: "); */}
        <span className="function_name">printf</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_symbols">"</span>
        <span className="function_text">Enter your word: </span>
        <span className="function_symbols">"</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
        <span className="comments"> // one word search</span>
      </p>

      <p className="main_p">
        {/* scanf("%s", array); */}
        <span className="function_name">scanf</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_symbols">"</span>
        <span className="function_string">%s</span>
        <span className="function_symbols">", </span>
        <span className="function_text">array</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
        <span className="comments"> // keyboard input</span>
      </p>

      <p className="break"></p>

      <p className="main_p">
        {/* printWord(array); */}
        <span className="function_name">printWord</span>
        <span className="function_sec_symbols">(</span>
        <span className="function_text">&array</span>
        <span className="function_sec_symbols">)</span>
        <span className="function_symbols">;</span>
      </p>

      <p className="break"></p>

      <p className="main_p">
        {/* return 0; */}
        <span className="function_return">return </span>
        <span className="function_text">0</span>
        <span className="function_symbols">;</span>
      </p>

      <p>
        {/* } */}
        <span className="function_braces">}</span>
      </p>
    </div>
  );
}

export default Main;
