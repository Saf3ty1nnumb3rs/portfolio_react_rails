import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../hamburgers.min.css";
import "../App.css";


const Head = styled.header`
  button {
    border: none;
    background: transparent;
    color: #ffffff;
    text-shadow: 1px 1px 1px #313030;
    cursor: pointer;
  }
`;

class InnerNav extends Component {
  
  handleLogo = () => {
    this.props.goHome();
  };
  
  

  render() {
    return (
      <Head id="nav-fill" className="primary-header">
        <div className="nav fixed-nav head-nav" role="navigation">
          <div className="logo-box-container">
            <div className="logo-case">
              <Link to="/">
                <button onClick={this.handleLogo}>
                  <p className="nav-logo">Joshua W. Sample</p>
                </button>
              </Link>
            </div>
            <div className="right-menu">
              <span className="contact-build" />
              {/* The following hamburger button is the work of Jon Suh and used with permission. The MIT License (MIT) Copyright (c) 2016 Jonathan Suh <hello@jonsuh.com> (jonsuh.com)  */}
              <button
                className="hamburger hamburger--arrowalt-r"
                type="button"
                onClick={this.props.toggleOverlay}
              >
                {/* give button is-active className on click in JS  --> */}
                {/* Also, contact-build must switch to hidden/ opacity 0 --> */}
                <span className="hamburger-box">
                  <span id="burger-white" className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Head>
    );
  }
}

export default InnerNav;
