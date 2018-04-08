import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import white from "../images/white.jpg";

class Footer extends Component {
  render() {
    return (
      //Styles in App.css
      <div id="contact" className="footer">
        <div className="foot-container">
          <div className="foot-logo">
            <span>DEVELOPED</span>
            <div>
              <img className="circle" src={white} alt="filler" />
            </div>
            <span>2017</span>
          </div>
        </div>
        <div className="about bottom-footer">
          <div id="foot-col-1" className="links-text">
            <h5>Contact</h5>
            <div>
              <ul>
                <li>Cabbagetown</li>
                <li>Atlanta, GA 30316</li>
                <li>
                  <i>josh@joshuawsample.com</i>
                </li>
              </ul>
            </div>
          </div>
          <div id="foot-col-3" className="links-text flexy">
            <h5>Substance</h5>
            <div>
              <ul>
                <li>
                  <Link to="#">Work</Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/baconsamples"
                    title="Twitter"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/saf3ty1nnumb3rs/"
                    title="Instagram"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/joshsample/"
                    title="LinkedIn"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/Saf3ty1nnumb3rs"
                    title="GitHub"
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
