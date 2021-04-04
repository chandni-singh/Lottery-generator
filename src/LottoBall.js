import React, { Component } from 'react';
import './LottoBall.css'

class LottoBall extends Component {
    render() {
        return (
            <h1 className = "LottoBall">{this.props.display}</h1>
        )
    }
}

export default LottoBall;