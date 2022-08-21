import React from "react";
import { useState } from "react";
import "./DocItem.css";
import Icon from "../Images/chevron-forward.png";

const DocItem = (props) => {
  const [contentVis, setContentVis] = useState(false);
  const [buttonPos, setButtonPos] = useState("0deg");
  const [contentH, setContentH] = useState("0vh");

  const displayContentToggle = () => {
    setContentVis(!contentVis);
    if (buttonPos === "0deg") {
      setButtonPos("90deg");
      setContentH("120vh");
    } else {
      setButtonPos("0deg");
      setContentH("0vh");
    }
  };

  return (
    <div>
      <div className="column">
        <div className="row">
          <img
            src={Icon}
            onClick={displayContentToggle}
            className="ContentButton"
            style={{ transform: "rotate(" + buttonPos + ")" }}
          ></img>
          <div className="title" onClick={displayContentToggle}>
            {props.title}
          </div>
        </div>
        {/* {contentVis && (
          <div className="content" style={{ height: contentH }}>
            Content
          </div>
        )} */}
        <div className="content" style={{ maxHeight: contentH }}>
          {props.content}
          <img src={props.visual} className="image"></img>
        </div>
      </div>
    </div>
  );
};

export default DocItem;
