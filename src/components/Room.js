import React, { Component } from "react";
import Light from "./Light";
import Switch from "./Switch";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  toggleStatus() {
    this.setState(state => ({
      status: !state.status
    }));
  }

  render() {
    return (
      <div className="room">
        <div className="cord" />
        <Light status={this.state.status} />
        <Switch status={this.state.status} handleClick={this.toggleStatus} />
      </div>
    );
  }
}

export default Room;
