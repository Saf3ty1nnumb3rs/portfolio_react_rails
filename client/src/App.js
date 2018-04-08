import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexView from "./components/viewcomponents/IndexView";
import ProjectView from "./components/viewcomponents/ProjectView";
import InnerNav from "./components/InnerNav";
import Footer from "./components/Footer";
import styled, { injectGlobal } from "styled-components";
import "./App.css";

injectGlobal`
/* @import url('https://fonts.googleapis.com/css?family=Permanent+Marker'); */
*:before, *:after {

box-sizing: border-box;

}
html, body {
  height: 100%;
  margin: 0;
  color: #FFFFFF;
  }
div {
  display: block;
}
`;

const AppWrap = styled.div`
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

class App extends Component {
  render() {
    const IndexWrapper = props => {
      return <IndexView />;
    };

    const ProjectWrapper = props => {
      return <ProjectView />;
    };
    return (
      <Router className="App">
        <AppWrap className="App">
          <InnerNav className="nav" />
          <Switch>
            <Route exact path="/" render={IndexWrapper} />
            <Route exact path="/projects/:id" render={ProjectWrapper} />
          </Switch>
          <Footer className="footer" />
        </AppWrap>
      </Router>
    );
  }
}

export default App;
