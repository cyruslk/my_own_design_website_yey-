import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AliciaMersy from './AliciaMersy.js';
import VieDange from './VieDange.js';
import LaRama from './LaRama.js';
import GabRei from './GabRei.js';
import Etienne from './Etienne.js';
import GeneTellem from './GeneTellem.js';
import Typist from 'react-typist';
import styled, { keyframes } from 'styled-components';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logs: [
        "Hello folks, welcome here!",
        "Yup! Welcome to my website ;-)",
        "Here, you'll find a selection of my latest projects...",
        "I like to work with interactivity (a lot)",
        "Bless you guys -- Bless ya"

      ],
      currentEle: 2
    }
    this.launchAnim = this.launchAnim.bind(this);
  }

  componentDidMount(){
    this.launchAnim();
  }

  launchAnim(){
    const currentEle = this.state.currentEle;
    const timeWithDelayed = (this.state.logs[currentEle].split("").length)/10 + 1.5;
    console.log(timeWithDelayed);
    this.setState({
      timeOfDelay: timeWithDelayed
    })

    const splitedEle = this.state.logs[currentEle].split("").map((ele, index) => {
    const toggleVisibility = keyframes`
      0%{ opacity:0;}
      99.9% {opacity:0;}
      100% {opacity:1;}
      `;

      const Span = styled.span`
        animation: ${toggleVisibility} ${index/10}s linear;
        animation-iteration-count: 1;
      `
      return (
          <Span key={index}>
            {ele}
          </Span>
        )
      })
      this.setState({
        splitedEle: splitedEle
      })
    }



    render() {
        return (
            <div className="App">
                <div className="logs">
                  {this.state.splitedEle}
                </div>

                <section id="intro">
                    <h1>75/20 is the design & programming practice of cyruslk.com</h1>
                    <h1>☯ For any inquiry:
                      <span>mail@75-20.com</span>
                    ☯</h1>
                </section>

                <AliciaMersy />
                <VieDange />
                <GeneTellem />
                <LaRama />
                <GabRei />
                <Etienne />
                <section id="intro">
                <h1>75/20 is the design & programming practice of cyruslk.com</h1>
                    <h1>☯ For any inquiry:
                      <span>mail@75-20.com</span>
                        ☯</h1>
                </section>
            </div>
        );
    }
}

export default App;
