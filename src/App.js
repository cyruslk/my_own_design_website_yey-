import React, {Component} from 'react';
import './App.css';
import ComponentWrapper from './ComponentWrapper.js';
import ComponentWrapperLonger from './ComponentWrapperLonger.js';
import ComponentImgWrapper from './ComponentImgWrapper.js';
import Typist from 'react-typist';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

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
      displayLogs: "none",
      currentWord: "Hey there!",
      scrollY: 0,
      currentWordCounter: 0,
      componentsData: [
        [
          {
            h1: "1/7 - Website for Alicia Mersy. ",
            span: "www.aliciamersy.com",
            link: "http://aliciamersy.com/",
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934840/3_tvmllo.jpg"
            ]
          }
        ],
        [
          {
            h1: "2/7 - Website & Exhibition Press Kits for vie d'ange. ",
            pre_img: "",
            span: "www.viedange.viedange.club",
            link: "http://aliciamersy.com/",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526936219/3_uedwbv.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935067/3_xftsty.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935602/3_myqq2u.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935809/3_zf4pjc.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941210/3_hnlz4w.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941364/3_fzhbg1.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941796/3_tk3edj.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941540/3_dn4saw.jpg",
            ]
          }
        ],
        [
          {
            h1: "3/7 - Website for Gene Tellem. ",
            span: "www.genetellem.pro",
            link: "http://genetellem.pro",
            pre_img: "",
            img : [
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852898/gene_1_rczvs6.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852899/gene_3_c3fctr.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852899/gene_6_njomuv.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538853965/gene_12_omkl7v.jpg"
            ]
          }
        ],
        [
          {
            h1: "4/7 - Website for Gab Rei. ",
            span: "www.gab-rei.75-20.com",
            link: "http://gab-rei.c-t-l-k.com/",
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944777/3_tlbnsr.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944843/4_qypnv8.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944994/5_ggkpok.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526945338/6_unrabl.jpg"
            ]
          }
        ],
        [
          {
            h1: "5/7 - Website for Étienne Chartrand. ",
            span: "www.etiennechartrand.com",
            link: "http://www.etiennechartrand.com/",
            pre_img: "",
            backgroundColor: "black",
            img : [
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526942335/3_kj5okl.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526942663/4_hwknpl.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538858982/e__4_l0bny7.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538859246/e__5_aehlbl.jpg"
            ]
          }
        ],
        [
          {
            h1: "6/7 - Website for Jean-François Sauvé. ",
            span: "www.jeanfrancoissauve.com",
            link: "http://jeanfrancoissauve.com/",
            pre_img: "",
            backgroundColor: "",
            img : [
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540054260/1_hcqlox.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540073154/3_onhbih.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540054260/2_eitj6y.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540073743/5_rfxj7t.jpg",
            ]
          }
        ],
        [
          {
            h1: "7/7 - Website for La Rama.  ",
            span: "www.larama.com",
            link: "https://larama.ca/",
            pre_img: "",
            backgroundColor: "black",
            img : [
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540074681/B3_wyap8b.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540074329/B1_azfxx7.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540077116/B6_ly6dfq.jpg",
              "http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1540077855/B4_cmense.jpg"
            ]
          }
        ],
      ]
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.triggerState = this.triggerState.bind(this);
  }

  componentDidMount(){

    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);

    const timeWithDelayed = (this.state.logs[this.state.currentWordCounter].split("").length)/10 + 1.5;
    this.setState({
      timeWithDelayed: timeWithDelayed
    })
  }

  handleScroll(e) {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scroll = {
     x: supportPageOffset ? window.pageXOffset : isCSS1Compat ?
     document.documentElement.scrollLeft : document.body.scrollLeft,
     y: supportPageOffset ? window.pageYOffset : isCSS1Compat ?
     document.documentElement.scrollTop : document.body.scrollTop
  };

    this.setState({
      scrollY: scroll.y
    })
    if(this.state.scrollY > 200){
      this.setState({
        displayLogs: "none"
      })
    }
  };

    triggerState(){
        this.setState({
          currentWordCounter: this.state.currentWordCounter+1,
          currentWord: this.state.logs[this.state.currentWordCounter],
          timeWithDelayed: (this.state.logs[this.state.currentWordCounter].split("").length)/10 + 1.5
        })

        if(this.state.currentWordCounter === this.state.logs.length-1){
          this.setState({
            currentWordCounter: 0
          })
        }else{
          this.setState({
            currentWordCounter: this.state.currentWordCounter+1
          })
        }
    }


    render() {

        const currentWordArrayContainer = [];
        const currentWordArray = this.state.currentWord.split("").map((ele, index) => {

          currentWordArrayContainer.push(ele)
        })


        const updatedData = new Date().toString();



        return (
            <div className="App" onClick={this.triggerState}>
                <div className="logs" style={{display: this.state.displayLogs}}>
                  {currentWordArrayContainer}
                </div>

                <section id="intro">
                    <h1>75/20 - the design & programming practice of cyruslk.com</h1>
                    <h1>&nbsp;	☯ For any inquiry:&nbsp;
                      <span>mail@75-20.com</span>&nbsp;
                    ☯</h1>
                </section>

                <ComponentWrapper props={this.state.componentsData[0]}/>
                <ComponentWrapperLonger props={this.state.componentsData[1]}/>
                <ComponentWrapper props={this.state.componentsData[2]}/>
                <ComponentWrapper props={this.state.componentsData[3]}/>
                <ComponentWrapper props={this.state.componentsData[4]}/>
                <ComponentWrapper props={this.state.componentsData[5]}/>
                <ComponentWrapper props={this.state.componentsData[6]}/>


                <footer className="footer flex_div">
                  <div className="flex_div">
                  <h1>UPDATED: Mon Oct 22 2018 22:51:47 GMT-0400 (UTC−04:00)</h1>
                  </div>
                  <div className="flex_div">
                  <h1>DATE NOW: {updatedData}</h1>
                  </div>
                </footer>


            </div>
        );
    }
}

export default App;
