import React from "react";
import "./App.css";

function HeaderComments() {
  return (
    <div className="header">
      <p className="comments">/*</p>
      <p className="comment_space comments">
        * Press Run or Ctrl+Shift+` to search for the definition of your word
      </p>
      <p className="comment_space comments">*/</p>
    </div>
  );
}

export default HeaderComments;
