import React from "react";

function Switch(props) {
  let switchStyle = "switch switch-" + (props.status ? "on" : null);
  return (
    <div>
      <div className={switchStyle} onClick={props.handleClick}>
        {props.status === true ? "ON" : "OFF"}
      </div>
    </div>
  );
}

export default Switch;
