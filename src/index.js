import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LottoBall from './LottoBall';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div>
        <Lottery />
        <Lottery title = "Mini Daily" maxNum = {10} numBalls = {4} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



