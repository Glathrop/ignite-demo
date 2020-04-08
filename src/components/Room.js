import React, { Component } from "react";
import Light from "./Light";
import Switch from "./Switch";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      numberSwitches: 3,
      numberOnSwitches: 0
    };
    this.toggleStatus = this.toggleStatus.bind(this);
    this.renderSwitches = this.renderSwitches.bind(this);
  }

  toggleStatus(turningOn) {
    if (turningOn === true) {
      this.setState(state => ({
        status: true,
        numberOnSwitches: state.numberOnSwitches + 1
      }));
    } else {
      this.setState(state => ({
        status: state.numberOnSwitches - 1 === 0 ? false : true,
        numberOnSwitches: state.numberOnSwitches - 1
      }));
    }
  }

  renderSwitches(num) {
    let switches = [];
    for (let i = 0; i < num; i++) {
      switches.push(
        <Switch
          key={i}
          lightStatus={this.state.status}
          handleClick={this.toggleStatus}
        />
      );
    }
    return switches;
  }

  render() {
    return (
      <div className="room">
        <div className="cord" />
        <Light status={this.state.status} />
        {this.renderSwitches(this.state.numberSwitches)}
      </div>
    );
  }
}

export default Room;
