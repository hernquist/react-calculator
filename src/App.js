import React, { Component } from 'react';
import NumberInput from './NumberInput';
import DisplayResult from './DisplayResult';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOne: "",
      numberTwo: "",
      operation: "",
      result: "",
    }
  }

  handleInput = (event, id) => {
    console.log (event.target.value, id);
    if (id === 1) {
      this.setState({
        numberOne: Number(event.target.value)
      })
    } else if (id === 2) {
      this.setState({
        numberTwo: Number(event.target.value)
      })
    }
  }

  handleOperation = operation => {
    console.log(operation);
    this.setState({
      operation
    })
  }

  handleResult = () => {
    let answer;
    const { numberOne, numberTwo, operation} = this.state;
    if (operation === '+') {
      answer = numberOne + numberTwo;
    }
    if (operation === "-") {
      answer = numberOne - numberTwo;
    }
    if (operation === "x") {
      answer = numberOne * numberTwo;
    }    
    if (operation === "/") {
      answer = numberOne / numberTwo;
    }
    const result = `${numberOne} ${operation} ${numberTwo} = ${answer}`;
    this.setState({
      result,
      numberOne: "",
      numberTwo: "",
      operation: ""
    });
  }

  render() {
    return <div className="App">
        CALCULATOR
        <div style={{display: "flex", justifyContent: "center"}}>
          <NumberInput id={1} value={this.state.numberOne} handleInput={this.handleInput} />
          {` ${this.state.operation} `}
          <NumberInput id={2} value={this.state.numberTwo} handleInput={this.handleInput} />
        </div>
        <button onClick={() => this.handleOperation("+")}>add</button>
        <button onClick={() => this.handleOperation("-")}>
          subtract
        </button> <button onClick={() => this.handleOperation("x")}>
          multiply
        </button> <button onClick={() => this.handleOperation("/")}>
          divide
        </button>
        <DisplayResult result={this.state.result} handleResult={this.handleResult} />
      </div>;
  }
}

export default App;
