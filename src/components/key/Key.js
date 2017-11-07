import React from 'react';
import { Button } from 'react-bootstrap';

import './Key.css';

class Key extends React.Component {
  generateStyle(keySize) {


    return {
      "width": keySize,
      "height": keySize,
    }
  }

  render() {
    return (
      <div className="bg-light">
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
        <Button style={this.generateStyle(55)}>{'W'}</Button>
      </div>
    );
  }
}

export default Key;