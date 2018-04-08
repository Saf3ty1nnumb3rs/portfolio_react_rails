import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexView from './components/viewcomponents/IndexView'
import ProjectView from './components/viewcomponents/ProjectView'
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {



    const IndexWrapper = props => {
      return <IndexView />
    }

    const ProjectWrapper = props => {
      return <ProjectView />
    }
    return (
      <Router className="App">
        <div className="App">
          <Switch>
            <Route exact path="/" render={IndexWrapper} />
            <Route exact path="/projects/:id" render={ProjectWrapper} />
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
