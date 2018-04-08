import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../hamburgers.min.css'
import "../App.css";
class InnerNav extends Component {

  render() {
    return (
      <header id="nav-fill" className="primary-header">
        <div className="nav fixed-nav head-nav" role="navigation">
          <div className="logo-box-container">
            <div className="logo-case">
              <Link to="/">
                <h2 className="nav-logo">Joshua W. Sample</h2>
              </Link>
            </div>
            <div className="right-menu">
              <span className="contact-build">
                <Link to="#footer-col-1">
                  <h2>Contact</h2>
                </Link>
              </span>
              {/* The following hamburger button is the work of Jon Suh and used with permission. The MIT License (MIT) Copyright (c) 2016 Jonathan Suh <hello@jonsuh.com> (jonsuh.com)  */}
              <button className="hamburger hamburger--arrowalt-r" type="button" onClick={this.props.toggleOverlay}>
                {/* give button is-active className on click in JS  --> */}
                {/* Also, contact-build must switch to hidden/ opacity 0 --> */}
                <span className="hamburger-box">
                  <span id="burger-white" className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default InnerNav;
