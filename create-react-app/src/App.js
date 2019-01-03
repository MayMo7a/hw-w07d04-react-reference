import React, { Component } from 'react';
import './App.css';
import ReactHeader from './components/ReactHeader';
import Content from './components/Content';
import ReactFooter from './components/ReactFooter';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactHeader/>
        <Content/>
        <ReactFooter/>

      </div>
    );
  }
}

export default App;
