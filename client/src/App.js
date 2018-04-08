import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexView from "./components/viewcomponents/IndexView";
import ProjectSingleView from "./components/viewcomponents/ProjectSingleView";
import InnerNav from "./components/InnerNav";
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
    left: 0;
    bottom: 0;
  }
`;

class App extends Component {
 state ={
  showOverlay: false
 }









 showOverlay = () => {
  this.setState({
    showOverlay: !this.state.showOverlay
  });
};

  render() {

    const IndexWrapper = props => {
      return <IndexView showOverlay={this.state.showOverlay}/>;
    };

    const ProjectWrapper = props => {
      return <ProjectSingleView />;
    };
    return (
      <Router className="App">
        <AppWrap className="App">
          <InnerNav className="nav" toggleOverlay={this.showOverlay}/>
          <Switch>
            <Route exact path="/" render={IndexWrapper} />
            <Route exact path="/projects/:id" render={ProjectWrapper} />
          </Switch>
        </AppWrap>
      </Router>
    );
  }
}

export default App;
