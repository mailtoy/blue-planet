import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Search from './Components/search';
import Explore from './Pages/Explore';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Search />
      //   <Area />
      //   <Season />
      //   <Themes />
      // </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/explore" component={Explore}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
