import React, { Component } from "react";
import '../App.css'

class TopSection extends Component {
  render() {
    return (
      <div className="top-section">
        <div className="full-stack">
          <div id="start-change" className="full">
            Full
          </div>
          <div className="s">S</div>
          <div className="tack">tack</div>
          <div className="web-dev">Web Development</div>
          <div className="olutions">olutions</div>
          <div className="solutions">Solutions</div>
        </div>
      </div>
    );
  }
}

export default TopSection;
