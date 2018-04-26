import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

const Tops = styled.div`
  
`;

class TopSection extends Component {
  render() {
    return (
      <Tops className="top-section">
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
      </Tops>
    );
  }
}

export default TopSection;
