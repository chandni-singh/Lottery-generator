import React, { Component } from 'react';
import LottoBall from './LottoBall';

import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title : 'Lottery',
        numBalls : 6,
        maxNum : 40
    }

    constructor(props) {
        super(props);
        this.state = {
            nums : [1,2,3,4,5,6]
        }

        this.genLottery = this.genLottery.bind(this);
    }

    genLottery() {
        let numArr = [];
        for(let i= 0; i<this.props.numBalls; i++) {
            numArr.push(Math.floor(Math.random()*this.props.maxNum) + 1);
        }

        this.setState({nums : numArr});
        console.log(this.state);
    }

    render() {
        return(
            <div className= "Lottery-container">
                <div className = "Lottery">
                    <LottoBall display = {this.state.nums[0]} />
                    <LottoBall display = {this.state.nums[1]} />
                    <LottoBall display = {this.state.nums[2]} />
                    <LottoBall display = {this.state.nums[3]} />
                    <LottoBall display = {this.state.nums[4]} />
                    <LottoBall display = {this.state.nums[5]} />
                </div>
                <button onClick = {this.genLottery}>Generate!</button>
            </div>
        )
    }
}

export default Lottery;