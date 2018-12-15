import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

      componentDidMount() {
       this.countdown = setInterval(this.timer, 1000);
     },

     componentWillUnmount() {
       clearInterval(this.countdown);
     },

     timer() {
         this.setState({ currentCount: 10 });
       }

  render() {
    var displayCount = this.state.currentCount--;

    return (
      <div className="App">
        {displayCount}  
      </div>
    );
  }
}

export default App;
