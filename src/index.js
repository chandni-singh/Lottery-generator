import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LottoBall from './LottoBall';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <Lottery />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



