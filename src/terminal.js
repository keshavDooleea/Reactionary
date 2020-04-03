import React, { useState } from "react";
import "./App.css";

function Terminal(props) {
  return (
    <div>
      <p className="close_btn" onClick={() => {}}>
        X
      </p>

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
    </div>
  );
}

export default Terminal;
