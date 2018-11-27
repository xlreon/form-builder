import React, { Component } from 'react';
import Header from './Header/Header';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Header />
        <LeftPane />
        <center>
        <RightPane className='right-pane'/>
        </center>
      </div>
    );
  }
}

export default App;
