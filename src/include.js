import React from "react";
import "./App.css";

function Includes(libName) {
  return (
    <div className="libName">
      <p>
        #include
        <span>
          {libName.dictionary}
          <span> // for dictionary_definition</span>
        </span>
      </p>
      <p>
        #include
        <span>
          {libName.print}
          <span> // for printf & scanf</span>
        </span>
      </p>
    </div>
  );
}

export default Includes;
