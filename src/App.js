import React, { Component } from 'react';
import './tailwind.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }
    increment() {
        this.setState({
            value: this.state.value + 1
        });
    }
    decrement() {
        const newVal = this.state.value === 0 ? 0 : this.state.value - 1;
        this.setState({
            value: newVal
        });
    }
  render() {
    return (
      <div className="bg-black flex items-center justify-center h-screen w-screen">
          <button id="decrement" onClick={() => this.decrement()} className="text-3xl w-32 h-32 rounded-full bg-blue text-white focus:outline-none hover:bg-blue-dark">-</button>
          <div id="value" className="w-64 text-5xl text-center text-white">{this.state.value}</div>
          <button id="increment" onClick={() => this.increment()} className="text-3xl w-32 h-32 rounded-full bg-orange text-white focus:outline-none hover:bg-orange-dark">+</button>
      </div>
    );
  }
}

export default App;
