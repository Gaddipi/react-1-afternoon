import React, { Component } from 'react';

export default class EvenAndOdd extends Component { 
    constructor() {
        super()

        this.state = {
            evenArr : [],
            oddArr: [],
            userInput: ''

        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',')
        let evens = [];
        let odds = [];
        for( let i = 0; i < arr.length; i++) {
            if( arr[i] % 2 === 0 ) {
                evens.push( parseInt(arr[i], 10))
            } else {
                odds.push( parseInt(arr[i], 10))
            }
        }
        this.setState({evenArr: evens, oddArr: odds})
  
    }

    render() {
        return (
            <div className = 'puzzleBox evenAndOddPB'>
            <h4> Even and Odds </h4>
            <input className = 'inputLine' onChange = {(e) => this.handleChange(e.target.value)} ></input>
            <button className = 'confirmationButton' onClick = {() => {this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
            <span className = 'resultBox'> Evens: { JSON.stringify(this.state.evenArr)} </span>
            <span className = 'resultBox'> Odds: { JSON.stringify(this.state.oddArr)} </span>
            </div>
        )
    }
}