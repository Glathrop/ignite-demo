import React, { Component } from "react";

class Light extends Component {
  render() {
    let lightStyle = "light light-" + (this.props.status ? "on" : "off");
    return (
      <div>
        <div className={lightStyle} onClick={this.toggleStatus} />
      </div>
    );
  }
}

export default Light;
