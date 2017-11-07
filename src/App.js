import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';
import Key from './components/key/Key';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <Header/>
        <h1>{'Configure your Keyboard'}</h1>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
      </div>
    );
  }
}

export default App;
