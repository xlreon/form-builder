import React, { Component } from 'react';
import Header from './Header/Header';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { Provider } from 'react-redux';
import { store } from '../modules/store';
import '../styles/App.css'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='app'>
          <Header />
          <LeftPane />
          <center>
          <RightPane className='right-pane'/>
          </center>
        </div>
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
