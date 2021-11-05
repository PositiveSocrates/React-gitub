import React, { Component } from "react";
class View extends Component {
  render() {
    return (
      <div>
        <div className="classBlock">{this.props.title}</div>
      </div>
    );
  }
}
export default View;
