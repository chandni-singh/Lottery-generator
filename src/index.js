import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LottoBall from './LottoBall';

class App extends Component {
  render() {
    return (
      <LottoBall />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



