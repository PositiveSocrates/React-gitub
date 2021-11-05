import React, { Component } from "react";
// import Child from "./child";
class View extends Component {
  render() {
    return (
      <div>
        <p className="introduce-title">{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
}
export default View;
