import React, { useState } from "react";

function Switch(props) {
  let [switchStatus, setSwitchStatus] = useState(false);

  function switchClick() {
    setSwitchStatus(status => !status);
    props.handleClick(!switchStatus);
  }

  return (
    <div className="switch-container">
      <div
        className={switchStatus === false ? "switch" : "switch switch-on"}
        onClick={switchClick}
      >
        {switchStatus === false ? "Off" : "On"}
      </div>
    </div>
  );
}

export default Switch;
