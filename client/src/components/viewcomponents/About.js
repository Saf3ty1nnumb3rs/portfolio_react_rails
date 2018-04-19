import React, { Component } from "react";
import profile from "../../images/profile.jpg";
import styled from "styled-components";

const AboutWrap = styled.div`
  img {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  p {
    position: relative;
    color: white;
    z-index: 100;
    margin:2vw auto;
    top: 20vh;
    left: 0;
    right: 0;
    font-size: 2.3vw;
    width: 80vw;
    text-shadow: 1px black;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutWrap>
        <p>
          Hi! My name is Josh. Thanks for taking the time to check out what I
          do. I'm utilizing a love of technology and design to bring about change to
          our digital world. I absolutely love design, but I am also immensely
          fascinated by backend development and the possibilities it creates.
          The greatest reward comes from combining beautiful and elegant design
          and a powerful and seamless backend to create something highly
          functional and enjoyable to use. The possibilities are endless; the
          learning and creating will never stop. Let's go.
        </p>
        <p>
          When I'm not showing people pictures of my daughter Auguste, I'm
          hanging out with her and her beautiful mother.
        </p>
        <p> I like squirrels.</p>
        <p> A lot.</p>
        <img src={profile} alt="Me" />
      </AboutWrap>
    );
  }
}

export default About;
