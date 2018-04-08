import React, { Component } from "react";
import styled from "styled-components";
import About from './About'
import "../../App.css";

const OverWrap = styled.div`
  button {
    border: none;
    background: transparent;
    color: #ffffff;
    cursor: pointer;
  }
`;
class OverlayNav extends Component {
  state = {
    showAbout: false
  };

  toggleShowAbout = () => {
    this.setState({ showAbout: !this.state.showAbout });
  };
  render() {
    return (
      <OverWrap className="menu-overlay">
        {this.state.showAbout ? (
          <About />
        ) : (
          <nav>
            <ul>
              <li>
                <button onClick={this.toggleShowAbout}>About</button>
              </li>
              <li>
                <button onClick={this.props.toggleOverlay}>Work</button>
              </li>
              <li>
                <button onClick={this.props.toggleOverlay}>Contact</button>
              </li>
              <li>
                <button onClick={this.props.toggleOverlay}>
                  Home
                </button>
              </li>
            </ul>
          </nav>
        )}
      </OverWrap>
    );
  }
}

export default OverlayNav;
