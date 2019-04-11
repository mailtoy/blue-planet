import React, { Component } from 'react';
import Season from '../Components/season';
import Themes from '../Components/themes';
import Area from '../Components/area';
import Duration from '../Components/duration';

class Explore extends Component {
  render() {
    return (
      <div className="App">
     
        <Area />
        <Duration/>
        <Season />
        <Themes />

      </div>
  
    );
  }
}

export default Explore;
