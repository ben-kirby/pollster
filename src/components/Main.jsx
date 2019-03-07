/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Link } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <div>
        <div>
          <button>New Poll</button>
          
        </div>
        <div>
          <input type="text" placeholder="Enter Poll Code" />
          <button>Go!</button>
        </div>
      </div>
    );
  }
}

export default Main;