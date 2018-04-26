import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import Resume from "./Resume"

import "../../App.css";

const OverWrap = styled.div`
  button {
    border: none;
    background: transparent;
    color: #ffffff;
    text-shadow: 1px 1px 2px black;
    cursor: pointer;
  }
`;
class OverlayNav extends Component {
  state = {
    showAbout: false,
    showRes: false
    
  };
  handleHome = () => {
    this.props.history.push("/");
    this.props.toggleOverlay();
  };
  toggleShowAbout = () => {
    this.setState({
      showAbout: true,
      showRes: false
    });
    this.props.hideNav()
  };
  toggleShowRes = () => {
    this.setState({
      showAbout: false,
      showRes: true
    });
    this.props.hideNav()
  };
  
  
  render() {
    return (
      <OverWrap className="menu-overlay">
        {this.state.showAbout ? <About /> : null}
        {this.state.showRes ? <Resume /> : null}
        {this.props.showNav ? (
          <nav>
            <ul>
              <li>
                <button onClick={this.toggleShowAbout}>About</button>
              </li>
              <li>
                <button onClick={this.props.toggleOverlay}>Work</button>
              </li>
              <li>
                <button onClick={this.toggleShowRes}>Resumé</button>
              </li>
              <li>
                <button onClick={this.handleHome}>Home</button>
              </li>
            </ul>
          </nav>
        ) : null}
        
      </OverWrap>
    );
  }
}

export default OverlayNav;
