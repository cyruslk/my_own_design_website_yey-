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
var scrollPosition = require('scroll-xy')



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logs: [
        "Hey there!",
        "Yup! Welcome to my website ;-)",
        "Here, you'll find a selection of my latest projects...",
        "I like to work with interactivity (a lot)",
        "Bless you guys -- Bless ya"
      ],
      currentEleIndex: 0,
      displayLogs: "none",
      scrollY: 0
    }
    this.launchAnim = this.launchAnim.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.launchAnim();
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
     x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
     y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  };
    this.setState({
      scrollY: scroll.y
    })
    if(this.state.scrollY > 200){
      this.setState({
        displayLogs: "block"
      })
    }
  };


  launchAnim(){    
    const currentEleIndex = this.state.currentEleIndex;
    const timeWithDelayed = (this.state.logs[currentEleIndex].split("").length)/10 + 1.5;
    this.setState({
      timeOfDelay: timeWithDelayed
    })
    
    const splitedEle = this.state.logs[currentEleIndex].split("").map((ele, index) => {
    const toggleVisibility = keyframes`
      0%{ opacity:0;}
      99.9% {opacity:0;}
      100% {opacity:1;}
      `;
      
      // function returnRandomDelay(){
      //   const items = [10, 5, 4, 6];
      //   return items[Math.floor(Math.random()*items.length)];
      // }
            
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
        splitedEle: splitedEle,
        currentEleIndex: this.state.currentEleIndex + 1
      })
    }
    

    render() {
      
        return (
            <div className="App" onClick={this.triggerState}>
                <div className="logs" style={{display: this.state.displayLogs}}>
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
