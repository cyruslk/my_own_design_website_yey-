import React, {Component} from 'react';
import ReactInterval from 'react-interval';
import './App.css';
import VideoWrapper from "./VideoWrapper";
import IdleTimer from 'react-idle-timer';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ScrollableFeed from 'react-scrollable-feed'
import styled, { keyframes } from 'styled-components'
import axios from 'axios';
var scrollPosition = require('scroll-xy');
var emoji = require('node-emoji')
var now = require("date-now")


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logsRunning: true,
      userIsActive: true,
      userDataFromIpPackage: "",
      userDataFromIpLogs: "",
      count: 3,
      displayBubbleDots: "flex",
      main: true,
      ip_user: "",
      info: ["Hey there, I’m Cyrus and this is my design and code practice. Under the 75-20 moniker, I’m designing and programming websites and applications for a variety of clients - mostly related to the cultural field. I’m also an practice-based researcher/scholar and a human living currently in Montréal.",
      "I was first trained as a graphic and a book designer before jumping into the programming world. I therefore have a very keen interest for typography and (swiss or dutch; geometric or chaotic) grid systems. I like contrast, I like details, I like colors, I like black and white. I like designing under constraints.",
      "I’m also very enthusiastic about the internet, the browser, creative coding and the JavaScript programming language. Using the browser as a playground, I’m therefore very keen to investigate and create through code all kinds of strategies and narratives to develop sur-mesure experiences and interactions. I like websites that are both complex and simple at the same time, where différents niveaux de lectures are stacked."],
      logs: [
        "Dear Internet user, thanks for hitting the INFO button.",
        "My name is Cyrus and this is my design and code practice.",
        "Yup! Sometimes I design and code, sometimes I just code for designers.",
        "In a parallel life, I’m also a critical engineering researcher pursuing a master’s degree at Concordia University.",
        "I was first trained as a graphic designer. <br /> I therefore have a very keen interest in typography, grid systems and visual strategies.",
        "I now strive to combine these with code - and  the possibilities code can bring for playful, weird, alien, brutal, dense interactions.",
        "That’s right... I see the web as a very exciting interactive and collaborative canvas.",
        "Ok, enough talking for now ;-)",
        "I’m always open to all sorts of collaborations and freelance work, both for small and bigger digital projects.",
        "But if you only want to say or have a chat and talk about the weather, this is also great.",
        "Bye for now, and take care"

      ],
      logsInactive: [

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
      processDataText: [
        "Other current projects includes:",
        "- Frederique B. Sainte-Marie",
        "- St-Henri Librairy. Design by St-Henri Librairy & James Oh",
        "- Étienne Chartrand V2",
        "- Gab Rei V2"
      ],
      mainData: [
        [
          {
            h1: "PROJECT #1/7 - Website for Alicia Mersy. ",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4"
            ],
            span: "www.aliciamersy.com",
            link: "http://aliciamersy.com",
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
            h1: "PROJECT #2/7 - Website for Gene Tellem. With help from Conan Lai.",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544570682/V3_af2fse.mov"
            ],
            span: "www.genetellem.pro",
            link: "http://genetellem.pro",
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
            h1: "PROJECT #3/7 - Website for Étienne Chartrand. ",
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
            h1: "PROJECT #4/7 -  Websites for Vie d'ange (More to come soon)",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1547869204/vda_1_gxpnnn.mov"
            ],
            span: "viedange.surge.sh",
            link: "http://viedange.surge.sh",
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
            h1: "PROJECT #5/7 - Website for Jean-François Sauvé. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613328/v1_1_ghio2i.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613653/V4_n410kz.mov",
            ],
            span: "www.jeanfrancoissauve.com",
            link: "http://jeanfrancoissauve.com",
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
            h1: "PROJECT #6/7 - Website for La Rama records. ",
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
            h1: "PROJECT #6/7 -  Website for all good. ",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544619201/V1_d0lyre.mov"
            ],
            span: "www.allgoodmtl.surge.sh",
            link: "https://allgoodmtl.surge.sh",
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544619201/V1_d0lyre.mov",
            ]
          }
        ],
        [
          {
            h1: "PROJECT #7/7 -  Website for Gab-Rei.",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544568848/V1_cgur4u.mov",
            ],
            span: "www.gabrielrei.com",
            link: "http://www.gabrielrei.com/",
            pre_img: "",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934840/3_tvmllo.jpg"
            ]
          }
        ]
      ]
    }
    this.triggerClickMain = this.triggerClickMain.bind(this);
    this.idleTimer = null;
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);

  }

  componentDidMount(){

    document.body.style.backgroundColor = "black";
    window.scrollTo(0, 0);

    }

    triggerClickMain(){
      this.setState({
        main: !this.state.main
      })
    }

    _onActive(e) {
      console.log('user is  active', e)
      this.setState({
        userIsActive: true
      })
    }

    _onIdle(e) {
      console.log('user is not active', e)
      this.setState({
        userIsActive: true
      })
    }


    componentDidUpdate(){

      if(this.state.count === this.state.logs.length+1){
        this.setState({
          count: 3,
        })
      }
      if(this.state.main === false || this.state.userIsActive === false){
        window.scrollTo(0,document.body.scrollHeight);
      }
    }


    render() {

        const mainDataRender = this.state.mainData.map((ele, index) => {
          return (
            <VideoWrapper
               data={this.state.mainData[index]}
               key={index}/>
          )
        })
        const processDataRender = this.state.processData.map((ele, index) => {
          return (
            <VideoWrapper props={this.state.processData[index]} key={index}/>
          )
        })

        const processDataTextRender = this.state.processDataText.map((ele, index) => {
          return (
            <h1 key={index}>{ele}</h1>
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

        if(this.state.main === true
          && this.state.userIsActive === true){

            const emojisRendered = this.state.emojis
            .map((ele, index) => {
              return(
                <div key={index}>
                {ReactHtmlParser(ele)}
                </div>
              )
            })

          return (

            <div>

            <IdleTimer
           ref={ref => { this.idleTimer = ref }}
           element={document}
           onActive={this.onActive}
           onIdle={this.onIdle}
           timeout={4000*10}>

            <main className="logs_first_fold">
              <div className="logs_first_fold_inner">
              {emojisRendered}
              </div>
            </main>



              <div className="App main">
                  <div className="main">
                  <section id="intro_buttons">
                      <div className="left_buttons">
                      <span>EMAIL</span>
                      <span>GITHUB</span>
                      <span>PGP KEY</span>
                      </div>
                      <div className="right_buttons">
                      <h1>Hey there - welcome to my website. It's currently 20:30 in Montréal.</h1>
                      <h1>I'm Cyrus and this is my design and programming practice.</h1>
                      </div>
                  </section>
                  </div>
                  {mainDataRender}
                  <div className="process">
                  {processDataRender}
                  <section id="intro_buttons">
                      <div className="left_buttons">
                      </div>
                      <div className="right_buttons">
                      {processDataTextRender}
                      </div>
                  </section>
                  </div>
                  <footer>
                    <section>
                      <div>
                      <h1>(Back to top)</h1>
                      </div>
                      <div>
                      <h1>Udpdated: <span>Mon Apr 19 1976 12:59:00 GMT-0500</span></h1>
                      <h1>CODE VERSION OF THE WEBSITE HERE</h1>
                      </div>
                    </section>
                  </footer>
              </div>
              </IdleTimer>

            </div>
          );
        }else if(this.state.main === false
          && this.state.ip_user.length > 0
          && this.state.userIsActive === true){

            const returnSpans = this.state.info
            .map((ele, index) => {
              return (
                <div className="spans_container">
                  <p>
                  {ReactHtmlParser(ele)}
                  </p>
                </div>
              )
            })


          return (

            <IdleTimer
           ref={ref => { this.idleTimer = ref }}
           element={document}
           onActive={this.onActive}
           onIdle={this.onIdle}
           timeout={4000*10}>

            <div className="App about">
            <section className="fixed_background" />
            <section id="intro_buttons">
                <div className="left_buttons">
                <span>EMAIL</span>
                <span>GITHUB</span>
                <span>PGP KEY</span>
                <span onClick={this.triggerClickMain}>PROJECTS</span>
                </div>
            </section>
            <section className="background_info">
                {returnSpans}
            </section>
        </div>
        </IdleTimer>
          )
        }else if(this.state.userIsActive === false){
          return(
            <div></div>
          )
        }else{
          return(
            <div>
              loading
            </div>
          )
        }
    }
}

export default App;
