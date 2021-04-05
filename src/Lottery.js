import React, { Component } from 'react';
import LottoBall from './LottoBall';

import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title : 'Lotto',
        numBalls : 6,
        maxNum : 40
    }

    constructor(props) {
        super(props);
        this.state = {
            nums : Array.from({length : this.props.numBalls})
        }

        this.genLottery = this.genLottery.bind(this);
    }

    genLottery() {
        // generating array of random numbers and updating state with this new copy of array
        let numArr = [];
        for(let i= 0; i<this.props.numBalls; i++) {
            numArr.push(Math.floor(Math.random()*this.props.maxNum) + 1);
        }

        this.setState({nums : numArr});
    }

    render() {
        return(
            <div className= "Lottery-container">
                <h1>{this.props.title}</h1>
                <div className = "Lottery">
                    {this.state.nums.map( n => 
                        <LottoBall display = {n} />
                    )}
                </div>
                <button onClick = {this.genLottery}>Generate!</button>
            </div>
        )
    }
}

export default Lottery;