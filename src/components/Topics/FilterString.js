import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            names: ['Mik', 'Tabitha', 'Mark', 'Sean', 'Ali', 'Matt', 'Phillip', 'John'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterNames(userInput) {
        let names = this.state.names 
        let filteredNames = [] 

        for( let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)) {
                filteredNames.push(names[i])
            }
        }

        this.setState({ filteredNames: filteredNames})
    }

    render() {
        return (
            <div className ='puzzleBox filterStringPB'>
                <h4> Filtered Strings </h4>
                <span className = 'puzzletext'> Names: { JSON.stringify(this.state.names, null, 10)}</span>
                <input className = 'inputLine' onChange= {(e) => this.handleChange(e.target.value)}></input>
                <button className= 'confermationButton' onClick = {() => this.filterNames(this.state.userInput)}> Filtered </button>
                <span className = 'resultBox filterStringRB' > Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}