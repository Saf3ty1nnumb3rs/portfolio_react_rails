import React, { Component } from "react";
import profile from "../../images/profile.jpg";
import styled from "styled-components";

const AboutWrap = styled.div`
  overflow: auto;
  img {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  #textual {
    height: 100vh;
    overflow-y: auto;
    p {
      position: relative;
      overflow-wrap: normal;
      white-space: normal;
      text-shadow: 1px 1px #000000;
      color: white;
      z-index: 100;
      margin: 2vw auto;
      top: 20vh;
      left: 0;
      right: 0;
      font-size: 18px;
      font-size-adjust: none;
      width: 90vw;
      text-shadow: 1px black;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrap>
        <div id="textual">
          <p>
            Hi! My name is Josh. Thanks for taking the time to check out what I
            do. I'm utilizing a love of technology and design to bring about
            change to our digital world. I absolutely love design, but I am also
            immensely fascinated by backend development and the possibilities it
            creates. The greatest reward comes from combining beautiful and
            elegant design and a powerful and seamless backend to create
            something highly functional and enjoyable to use. The possibilities
            are endless; the learning and creating will never stop. Let's go!
          </p>
          <p>
            When I'm not showing people pictures of my daughter Auguste, I'm
            hanging out with her and her beautiful mother.
          </p>
          <p>I collect and enjoy Scotch, love to kickbox, and still skate from time to time.</p>
          <p>And I like squirrels.</p>
          <p> A lot.</p>
        </div>

        <img src={profile} alt="Me" />
      </AboutWrap>
    );
  }
}

export default About;
