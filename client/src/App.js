import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexView from "./components/viewcomponents/IndexView";
import ProjectSingleView from "./components/viewcomponents/ProjectSingleView";
import InnerNav from "./components/InnerNav";
import styled, { injectGlobal } from "styled-components";
import "./App.css";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Philosopher|Spectral+SC:400,500');
*:before, *:after {

box-sizing: border-box;

}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #000000;
  background-color: #d5daf2;
  }
div {
  display: block;
}
button:active {
outline: none;
border: none;
}

button:focus {
  outline: none;
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
  showOverlay: false,
  showNav: true
 }
 





hideNav = () => {
  this.setState( { 
    showNav: !this.state.showNav
  } ) 
}

 showOverlay = (url) => {
   
  this.setState({
    showOverlay: !this.state.showOverlay,
    showNav: true
  });
 }

goHome = () => {
  this.setState( { 
    showOverlay: false,
    showNav: true
  } ) 
}

  render() {

    const IndexWrapper = props => {
      return <IndexView {...props} toggleOverlay={this.showOverlay} showOverlay={this.state.showOverlay} showNav={this.state.showNav} hideNav={this.hideNav}/>;
    };

    const ProjectWrapper = props => {
      return <ProjectSingleView {...props} toggleOverlay={this.showOverlay} showOverlay={this.state.showOverlay} showNav={this.state.showNav} hideNav={this.hideNav}/>;
    };
    return (
      <Router className="App">
        <AppWrap className="App">
          <InnerNav className="nav" {...this.props} toggleOverlay={this.showOverlay} goHome={this.goHome} />
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
