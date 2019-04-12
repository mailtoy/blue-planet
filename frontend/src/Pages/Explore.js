import React, { Component } from 'react';
import Season from '../Components/home/season';
import Themes from '../Components/home/themes';
import Area from '../Components/home/area';
import Duration from '../Components/home/duration';

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
