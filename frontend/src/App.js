import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/home/search';
import Explore from './Pages/Explore';

// import testing register
import Register from './Components/register/register'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/explore" component={Explore}/>
        </Switch>

        <Route path="/register" component={Register}/>
      </Router>
    );
  }
}

export default App;
