import React, {Component} from 'react';
import ReactInterval from 'react-interval';
import './App.css';
import Typist from 'react-typist';
import VideoWrapper from "./VideoWrapper";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled, { keyframes } from 'styled-components'
import axios from 'axios';
var scrollPosition = require('scroll-xy');
var emoji = require('node-emoji')




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bubbles: "none",
      logsRunning: true,
      count: 1,
      displayBubbleDots: "flex",
      main: true,
      ip_user: "",
      renderedArrayLogs: [],
      logs: [
        "Hello there internet user.",
        "I'm Cyrus and this is my code/design practice",
        "I'm also an artist and a scholar and you can find my projects here",
      ],
      processData: [
        [
          {
            h1: "FEATURED CURRENT PROJECT OF THE DAY : <span>Villeray Records</span>",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544628114/V1_bm4jn3.mov"
            ],
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934840/3_tvmllo.jpg"
            ]
          }
        ]
      ],
      mainData: [
        [
          {
            h1: "1/7 - Website for Alicia Mersy. ",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4"
            ],
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
            h1: "2/7 - Website for Gene Tellem. With help from Conan Lai.",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544570682/V3_af2fse.mov"
            ],
            span: "www.genetellem.pro",
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
            h1: "3/7 - Website for Étienne Chartrand. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544570050/v4_imhvvm.mov",
            ],
            span: "www.etiennechartrand.com",
            link: "http://etiennechartrand.com",
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
            h1: "4/7 - OLD Websites for Vie d'ange (More to come soon).",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4",
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4",
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4"
            ],
            span: "www.viedange.club",
            class: "line_through",
            link: "",
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
            h1: "5/7 - Website for Jean-François Sauvé. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613328/v1_1_ghio2i.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613653/V4_n410kz.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613906/v3_kbgddu.mov"
            ],
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
            h1: "6/7 - Website for La Rama. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544617495/V3_1_ojjf9u.mov"
            ],
            span: "www.larama.ca",
            link: "https://larama.ca",
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
            h1: "6/7 - Website for all good. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544619201/V1_d0lyre.mov"
            ],
            span: "www.aliciamersy.com",
            link: "http://aliciamersy.com/",
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544619201/V1_d0lyre.mov",
            ]
          }
        ],
        [
          {
            h1: "7/7 - OLD Website for Gab-Rei (more to come soon).",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544568848/V1_cgur4u.mov",
            ],
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
      ]
    }
    this.triggerClickMain = this.triggerClickMain.bind(this);
  }

  componentDidMount(){


    axios.get("https://api.ipify.org?format=json")
    .then((response) => {
      console.log(response.data.ip);
      this.setState({
        ip_user: response.data.ip
      })
    })

    document.body.style.backgroundColor = "black";
    window.scrollTo(0, 0);

    }

    triggerClickMain(){
      this.setState({
        main: !this.state.main
      })
    }

    componentDidUpdate(){

      if(this.state.count === this.state.logs.length+1){
        this.setState({
          count: 1,
        })
      }

      if(this.state.main === false){

      }

    }


    render() {

        const mainDataRender = this.state.mainData.map((ele, index) => {
          return (
            <VideoWrapper props={this.state.mainData[index]} key={index}/>
          )
        })
        const processDataRender = this.state.processData.map((ele, index) => {
          return (
            <VideoWrapper props={this.state.processData[index]} key={index}/>
          )
        })



        function returnBubbles(){
         const arrayOfBubbles = [];

         const rotate = keyframes`
             10% {
               transform: translateY(-10px);
             }

             50% {
               transform: translateY(0);
               background-color: "grey"
             }
           `;

         for(var i=0; i<3; i++){
           const Rotate = styled.div`
            animation: ${rotate} 2s infinite;
          `;
            arrayOfBubbles.push(
              <Rotate className="sub_dots" key={i}></Rotate>
            )
         }
         return arrayOfBubbles;
        }

        if(this.state.main === true && this.state.ip_user.length > 0){

          return (
              <div className="App main">


                  <div className="main">
                  <section id="intro_buttons">
                      <div className="left_buttons">
                      <span>EMAIL</span>
                      <span>GITHUB</span>
                      <span>PGP KEY</span>
                      <span onClick={this.triggerClickMain}>INFO</span>
                      </div>
                      <div className="right_buttons">
                      <h1>Hello there IP: {this.state.ip_user}, welcome to my website.</h1>
                      <h1>Here you'll find a selection of my latest projects. For more, hit info.</h1>
                      </div>
                  </section>
                  </div>
                  {mainDataRender}
                  <div className="process">
                  <section id="intro_buttons">
                      <div className="left_buttons">
                      <span>EMAIL</span>
                      <span>GITHUB</span>
                      <span>PGP KEY</span>
                      <span onClick={this.triggerClickMain}>INFO</span>
                      </div>
                      <div className="right_buttons">
                      <h1>Hello there IP: {this.state.ip_user}, glad you're still here ;-)</h1>
                      <h1>Here you'll find a first glimpse of the projects I'm currently working on.</h1>
                      </div>
                  </section>
                  {processDataRender}
                  <section id="intro_buttons">
                      <div className="left_buttons">
                      </div>
                      <div className="right_buttons">
                      <h1>Other current projects includes:</h1>
                      <h1>- Frederique B. Sainte-Marie, Set Designer</h1>
                      <h1>- St-Henri Librairy. Design by St-Henri Librairy & James Oh</h1>
                      <h1>- Étienne Chartrand V2</h1>
                      <h1>- Gab Rei V2</h1>
                      </div>
                  </section>
                  </div>
                  <footer>
                  </footer>
              </div>
          );
        }else if(this.state.main === false
          && this.state.ip_user.length > 0
          && this.state.logsRunning === true){

            console.log("true?");

          const returnLogs = this.state.logs.slice(0, this.state.count)
          .map((ele, index) => {
            return <div className="bubbles" key={index}>
            <h1>
            {ReactHtmlParser(ele)}
            </h1>
            </div>
          })


          return (
            <div className="App about">

            <section className="fixed_background" />


            <ReactInterval timeout={6000} enabled={true}
            callback={
              () => this.setState({
                logsRunning: false,
                count: this.state.count+1
              })} />

            <section id="intro_buttons">
                <div className="left_buttons">
                <span>EMAIL</span>
                <span>GITHUB</span>
                <span>PGP KEY</span>
                <span onClick={this.triggerClickMain}>PROJECTS</span>
                </div>
            </section>
            <section className="background_info">
            <div className="bubbles_container_outer">
                <div className="bubbles_container">
                <div className="bubbles_logs">
                  {returnLogs}
                </div>
                </div>
                <section>
                <div style={{display: this.state.displayBubbleDots}}>
                  {returnBubbles()}
                </div>
                </section>
              </div>
            </section>
        </div>
          )
        }else if(this.state.main === false
          && this.state.ip_user.length > 0
          && this.state.logsRunning === false){

            const returnLogs = this.state.logs.slice(0, this.state.count)
            .map((ele, index) => {
              return <div className="bubbles" key={index}>
              <h1>
              {ReactHtmlParser(ele)}
              </h1>
              </div>
            })


            return (
              <div className="App about">
              <section className="fixed_background" />
              <ReactInterval timeout={6000} enabled={true}
              callback={
                () => this.setState({
                logsRunning: true
                })} />
              <section id="intro_buttons">
                  <div className="left_buttons">
                  <span>EMAIL</span>
                  <span>GITHUB</span>
                  <span>PGP KEY</span>
                  <span onClick={this.triggerClickMain}>PROJECTS</span>
                  </div>
              </section>
                  <section className="background_info">
                  <div className="bubbles_container_outer">
                      <div className="bubbles_container">
                      <div className="bubbles_logs">
                        {returnLogs}
                      </div>
                      </div>
                    </div>
                  </section>
              </div>
            )
        }else{
          return (
            <div>
            </div>
          )
        }
    }
}

export default App;
