import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';
import Key from './components/key/Key';
import DevTools from './containers/DevTools';
import layout from './constants/m65';
import { Panel } from 'react-bootstrap';

class App extends Component {
  render() {
    console.log(layout);

    return (
      <div className="App bg-light">
        <Header/>
        <hr/>
        <Panel style={{width: 400, margin: 'auto',   boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"}}>
          <h2 style={{marginTop: -5}}>{'M65-A'}</h2>
          <div style={{border: "12px solid rgb(57, 59, 59)", borderRadius: 5, width: 330, margin: "auto"}}>{layout.map((row) => {
            return <div style={{height: 19}}>{row.map((key) => {
              return (<Key size={key.size}/>)
            })}</div>
          })}
          </div>
        </Panel>
        <DevTools/>
      </div>
    );
  }
}

export default App;
