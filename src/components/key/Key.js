import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Key.css';

class Key extends React.Component {
  static propTypes = {
    size: PropTypes.number
  };

  generateStyle(size) {
    const keySize = 15;
    const margin = 2;

    return {
      width: 15 * size + (size-1) * margin * 2,
      height: 15,
      background: 'rgb(0, 132, 194)',
      borderRadius: 3,
      margin
    }
  }

  render() {
    return (
      <div className="bg-light inline">
        <div style={this.generateStyle(this.props.size)}/>
      </div>
    );
  }
}

export default Key;