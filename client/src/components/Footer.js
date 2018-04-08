import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="foot-container">
          <div class="foot-logo">
            <span>DEVELOPED</span>
            <div>
              <img class="circle" src="" alt="filler" />
            </div>
            <span>2017</span>
          </div>
        </div>
        <div class="about bottom-footer">
          <div id="foot-col-1" class="links-text">
            <h5>Contact</h5>
            <div>
              <ul>
                <li>623 Gaskill St., Unit A</li>
                <li>Cabbagetown</li>
                <li>Atlanta, GA 30316</li>
                <li>
                  <i>josh@joshuawsample.com</i>
                </li>
              </ul>
            </div>
          </div>
          <div id="foot-col-2" class="links-text">
            <h5>Substance</h5>
            <div>
              <ul>
                <li>About</li>
                <li>Work</li>
                <li>Services</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
          <div id="foot-col-3" class="links-text">
            <h5>Social</h5>
            <div>
              <ul>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
