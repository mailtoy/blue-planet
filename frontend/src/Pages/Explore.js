import React, { Component } from 'react';
import Season from '../Components/home/season';
import Themes from '../Components/home/themes';
import Area from '../Components/home/area';
import Searchmini from '../Components/home/minisearch';
import Duration from '../Components/home/duration';

class Explore extends Component {
  render() {
    return (
      <div className="App">
        <Searchmini />
        <Area />
        <Duration />
        <Season />
        <Themes />

      </div>

    );
  }
}

export default Explore;
