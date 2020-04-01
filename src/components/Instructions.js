import React from "react";

function Instructions(props) {
  return (
    <p>
      Click the switch to turn {props.status === "off" ? "on" : "off"} the
      lights
    </p>
  );
}

export default Instructions;
