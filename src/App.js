import React, {Component} from 'react';
import Typist from 'react-typist';
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import _ from "lodash";
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import VideoWrapper from "./VideoWrapper";
import Archives from "./Archives";
import About from "./About";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userIsActive: true,
      isScrolling: false,
      selectedRandomColor: null,
      scrollAnimationsArray: null,
      scrollAnimationsArray2: null,
      scrollAnimationsArray3: null,
      shuffledArrayData: null,
      isAboutRender: false,
      mainMarginLeft: "0vw",
      counter: 0,
      MaininfoData: [
        "<span>Hello dear fellow online user,</span>",
        "<span><a>75-20</a> is the small and indenpendant practice I run on the port 3000 of my localhost.</span>",
        "<span>Under this moniker, I create and produce websites and apps for a variety of clients and for my own.</span>",
        "<span>I've been first trained as a designer before shifting to full-stack programming.</span>",
        "<span>I therefore have a keen interest in typographic systems combined with code; with the unusual and expected uses of technology online and offline.</span>",
        "<span>That's it...You can rest your eyes now.</span>",
        "<span>for more: <a>info@c-t-l-k.com</a></span>"
      ],
      EmailData: [
        "For any inquiries",
        "you can email me",
        "mailto:info@c-t-l-k.com",
      ],
      scrollingData: [
        {
          text: "<div>isDisplayedProcess = () => {</div><div>&nbsp;this.setState({</div><div>&nbsp;&nbsp;userIsActive: !this.state.userIsActive</div><div>&nbsp;})</div><div>}</div>",
          top: "4vw",
          left: "40vw"
        },
        {
          text: "<div>_onIdle = (e) => {</div><div>&nbsp;this.setState({ </div><div>&nbsp;&nbsp;userIsActive: false </div><div>&nbsp;})</div><div> }</div>",
          top: "40vw",
          left: "70vw"
        },
        {
          text: "<div>_onActive = (e) => {</div><div>&nbsp;this.setState({</div><div>&nbsp;&nbsp;userIsActive: true</div><div>&nbsp;})</div><div>}</div>",
          top: "10vw",
          left: "34vw"
        },
        {
          text: "<div>import VideoWrapper from './VideoWrapper';</div>",
          top: "10vw",
          left: "54vw"
        },
        {
          text: "<div>constructor(props) { </div><div>&nbsp;super(props);</div><div>&nbsp;this.state = { <div>&nbsp;&nbsp;ArchivesData: null</div> }</div>}</div>",
          top: "40vw",
          left: "25vw"
        },
        {
          text: "<div>export default Archives;</div>",
          top: "2vw",
          left: "21vw"
        },
        {
          text: "<div>'（ ゜ρ゜)ノ', </div><div>'(✿ヘᴥヘ)', </div><div>'(ㆁᴗㆁ✿)'</div>",
          top: "4vw",
          left: "4vw"
        },
        {
          text: "<div>（￣ε￣＠）', </div><div>'（⌒▽⌒）', </div><div>'（ ･`ー･´） +', </div><div>'(´ｰ+｀)', </div>",
          top: "20vw",
          left: "34vw"
        },
        {
          text: "<div>footer section div:last-child{</div><div>&nbsp;width: 60%; </div><div>}</div>",
          top: "10vw",
          left: "34vw"
        },
        {
          text: "<div>.iddle{</div><div>&nbspbackground-color: #6d6d6d;</div><div>&nbspwidth: 100vw;</div><div>}</div>",
          top: "5vw",
          left: "56vw"
        },
      ],
      randomColors: [
        "red",
      ],
      mainData: [
        [
          {
            h1: "Website for Alicia Mersy. ",
            h2: "2 pages + CMS - Times; Arial",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1520974034/Alicia_4K_r08rne.mp4"
            ],
            span: "www.aliciamersy.com",
            link: "http://aliciamersy.com",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg",
            ]
          }
        ],
        [
          {
            h1: "One pager for Gene Tellem. <br /> With help from Conan Lai.",
            h2: "Canvas + CMS + DB - Times New Roman; Arial",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544570682/V3_af2fse.mov"
            ],
            span: "www.genetellem.pro",
            link: "http://genetellem.pro",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557693524/sdcscsc_zimu0y.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557693524/_fvfvvdvvd_kvkyei.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557693526/cdscsc_xuygdr.jpg"
            ]
          }
        ],
        [
          {
            h1: "One pager for Étienne Chartrand. ",
            h2: "Canvas + DB + Sockets - Times New Roman + Arial",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544570050/v4_imhvvm.mov",
            ],
            span: "www.etiennechartrand.com",
            link: "http://etiennechartrand.com",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557694115/cfvdv_ma42tk.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557694114/cdscs_lzbkwf.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557694107/vfdgvdvfdvd_yg2yge.jpg"
            ]
          }
        ],
        [
          {
            h1: "Websites and press kits for Vie d'ange.",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1547869204/vda_1_gxpnnn.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1557071737/vd_1_nfworf.mov"
            ],
            span: "viedange.surge.sh",
            link: "http://viedange.surge.sh",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555518712/website/fdvdfvdvdvdvdvdfvdfvd.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555518711/website/cdfvdvdfvdfvd.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555518876/website/dsvfdvdvdvdvdvd.jpg"
            ]
          }
        ],
        [
          {
            h1: "Website for Jean-François Sauvé. ",
            h2: "Splash page + 4 pages + CMS - Canela Light; Dia-bold",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613328/v1_1_ghio2i.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544613653/V4_n410kz.mov",
            ],
            span: "www.jeanfrancoissauve.com",
            link: "http://jeanfrancoissauve.com",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555521480/fvdfvfdvdvdv_y5ca56.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555528080/vdfdvdv_uarfkc.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555520789/vdfvfvdvdfvdfvd_p0nvna.jpg",
            ]
          }
        ],
        [
          {
            h1: "One pager for La Rama records. ",
            h2: "SVG file + Bird's songs.mp3 + Weather API - Courier New; Garamond",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544617495/V3_1_ojjf9u.mov"
            ],
            span: "www.larama.ca",
            link: "https://larama.ca",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557694530/fdvfdvdfv_ijhfky.jpg",
            ]
          }
        ],
        [
          {
            h1: "Website for all good. ",
            h2: "2 pages + Google Street View API + TTS.mp3- Helvetica Neue, Helvetica, Comic Sans MS",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544619201/V1_d0lyre.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1557072883/A_G_1_1_dw8erw.mov"
            ],
            span: "www.allgoodmtl.surge.sh",
            link: "https://allgoodmtl.surge.sh",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557694727/vdfvv_x6qfdn.jpg"
            ]
          }
        ],
        [
          {
            h1: "One pager for Gab-Rei.",
            source: [
              "http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544568848/V1_cgur4u.mov",
            ],
            span: "www.gabrielrei.com",
            link: "http://www.gabrielrei.com/",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555520286/csdscscsdc3333_qro4jv.jpg"
            ]
          }
        ],
        [
          {
            h1: "Website for Future Fragments. <br /> With Conan Lai.",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1557588276/vvdfvd_1_cy5nj6.mov",
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1557589248/sdvsfvd_1_rbhavi.mov"
            ],
            span: "ff.plurality-university.org",
            link: "http://ff.plurality-university.org",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555521106/e32e2e2e_gwvsqz.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557695704/fdvfdv_vl9wvj.jpg",
            ]
          }
        ],
        [
          {
            h1: "One pager for Villeray Records",
            source: [
              "https://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1544628114/V1_bm4jn3.mov",
            ],
            span: "villerayrecords.com",
            link: "http://villerayrecords.com",
            additional_type: "screenshots",
            img : [
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555521106/e32e2e2e_gwvsqz.jpg",
              "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1557695704/fdvfdv_vl9wvj.jpg",
            ]
          }
        ],
      ],
      processData: [
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817761/proccess/Capture_d_e%CC%81cran_le_2019-08-26_a%CC%80_13.04.11.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817741/proccess/Capture_d_e%CC%81cran_le_2019-08-26_a%CC%80_13.03.59.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817283/proccess/Capture-d_e%CC%81cran_-le-2019-08-06-a%CC%80-10.46.22.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817189/proccess/Capture-d_e%CC%81cran_-le-2019-08-06-a%CC%80-21.34.56.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817136/proccess/Capture-d_e%CC%81cran_-le-2019-04-23-a%CC%80-09.45.16.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566817067/proccess/Capture-d_e%CC%81cran_-le-2019-08-06-a%CC%80-21.47.31.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566816861/proccess/Capture-d_e%CC%81cran_-le-2019-04-22-a%CC%80-22.33.31.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566816783/proccess/Capture_d_e%CC%81cran_le_2019-04-20_a%CC%80_17.25.30_11.32.52.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555521235/ergrggtrgrgrtgrg_ulhlbi.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1555519302/vfdfvdfvfdvdvdfvdfvdfvd_lsbyec.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526966056/test_bxanxt.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941796/3_tk3edj.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941210/3_hnlz4w.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526940367/3_pd4axv.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933273/3_p0asx8.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1511496423/Capture_d_e%CC%81cran_2017-11-22_a%CC%80_20.51.15_s2jhi5.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1504137014/va_logo_kqbagz.svg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566822022/proccess/54515721_328051804514184_2693790096343171072_n-_1.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566822012/proccess/26178275_10212398632055785_719337894_o.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566822012/proccess/25035105_10212222114002944_1183644812_o.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566822014/proccess/44308819_1981839528785966_5386681273211158528_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566822014/proccess/23961028_10212106280467178_1651602459_o.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566824271/proccess/30070529_10213165042975579_984259298_o.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566824590/proccess/36888017_10213811168728319_8033455170018869248_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566824700/proccess/36916359_10213811194008951_961922290319097856_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566824941/proccess/36863933_10213811194288958_8564766929753997312_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566825017/proccess/36821272_10213811186008751_7651016064913899520_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566826216/proccess/15682583_10209354421512424_1287716168_o.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566826215/proccess/2-51760998_1055661477967123_5062343334635241472_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566826435/proccess/53848960_839404479736867_5737011138386722816_n.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566826616/proccess/53909710_272964526984528_6593673469727080448_n.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566826704/proccess/53934092_254404268661346_293227793938907136_n.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566836880/proccess/Capture-d_e%CC%81cran_-le-2019-08-26-a%CC%80-18.21.22.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566836880/proccess/Capture-d_e%CC%81cran_-le-2019-08-26-a%CC%80-18.21.39.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566921651/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-03.44.43.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566921652/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-17.49.10.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566921653/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-02.33.34.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566922427/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-18.05.45.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566922426/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-18.06.33.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566922656/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-18.07.10.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566922822/proccess/Capture_d_e%CC%81cran_le_2019-08-27_a%CC%80_18.19.29.png",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566923413/Capture-d_écran_-le-2019-08-27-à-18.27.28_sttgrb.jpg",
        "https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1566924296/proccess/Capture-d_e%CC%81cran_-le-2019-08-27-a%CC%80-18.27.40.jpg"
      ]
    }
    this.idleTimer = null;
  }

   componentDidMount(){
      this.setState({
        selectedRandomColor: this.state.randomColors[Math.floor(
          Math.random()*this.state.randomColors.length
        )]
      })
      this.targetElement = document.querySelector("#body");

      const makeScrollAnimations = () => {
        let scrollAnimationsArray = _.shuffle(this.state.scrollingData)
        .map((ele, index) => {
          const style = {
            left: ele.left,
            top:  ele.top,
            color: "red",
          }
          return(
            <div
              key={index}
              style={style}
              className="scrolling_data">
              <Typist>
                {ReactHtmlParser(ele.text)}
              </Typist>
            </div>
          )
        })
        this.setState({
          scrollAnimationsArray
        })
      }

      makeScrollAnimations();

      window.addEventListener('scroll', this.handleScroll, true);
      window.addEventListener('scroll', _.debounce(() => {
        this.setState({
          isScrolling: false,
        }, () => {
          if(this.state.counter !== this.state.scrollingData.length-1){
            this.setState({
              counter: this.state.counter+1
            })
          }else{
            this.setState({
              counter: 0
            })
          }
        })
      }, 500))
   }

   triggerBackToTop = () => {
     return window.scrollTo(0, 0);
   }

    triggerIsAboutRender = () => {
      this.setState({
        isAboutRender: !this.state.isAboutRender
      }, () => {
        if(this.state.isAboutRender){
          return disableBodyScroll(this.targetElement);
        }else{
          return enableBodyScroll(this.targetElement);
        }
      })
    }

    handleScroll = (event) => {
      this.setState({
        isScrolling: true,
        shuffledArrayData: _.shuffle(this.state.scrollingData)[this.state.counter]
      })
    };


    _onActive = (e) => {
      this.setState({
        userIsActive: true
      })
    }

    _onIdle = (e) => {
      this.setState({
        userIsActive: false
      })
    }

    render() {

      const renderScrollingContent = () => {
        if(this.state.isScrolling){
            let scrollingDataEle = this.state.scrollAnimationsArray[this.state.counter];
            return scrollingDataEle
          }else{
            return null;
          }
       }


        const projectsRender = this.state.mainData
        .map((ele, index) => {
          return (
            <VideoWrapper
               selectedRandomColor={this.state.selectedRandomColor}
               animation={this.state.animation}
               data={this.state.mainData[index]}
               key={index}
            />
          )
        })

        const aboutRender = () => {
          if(this.state.isAboutRender){
            return(
              <div
                onClick={this.triggerIsAboutRender}
                className="about_render_container">
                  <div className="about_render">
                    {ReactHtmlParser(this.state.MaininfoData)}
                  </div>
            </div>
            )
          }else return null;
        }

        const headerRender = () => {
          let style = {
            color: "white",
            textDecoration: "none"
          };

          return (
            <header className="header_container">
              <section>
                <h1>
                  75-20:
                </h1>
                <h1>
                  Small practice for code and design, design and code.
                </h1>
              </section>
              <section>
                <span
                  style={{backgroundColor: this.state.selectedRandomColor}}>
                  <a
                  style={style}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:info@c-t-l-k.com">
                    EMAIL
                  </a>
                </span>
                <span
                  style={{backgroundColor: this.state.selectedRandomColor}}
                  onClick={this.triggerIsAboutRender}>
                  ABOUT
                </span>
                <span
                  style={{backgroundColor: this.state.selectedRandomColor}}
                  onClick={this.isDisplayedProcess}>
                    ARCHIVES
                </span>
                <span
                  style={{backgroundColor: this.state.selectedRandomColor}}>
                  <a
                    style={style}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/cyruslk">
                    GITHUB
                  </a>
                </span>
              </section>
            </header>
          )
        }

        if(!this.state.selectedRandomColor){
          return (
              <div>
                  loading
              </div>
          )
        }else if(this.state.userIsActive){
          return (
            <div>
                {renderScrollingContent()}
                  <div
                    className="App main">
                      {headerRender()}
                      {projectsRender}
                  </div>
                  <Archives
                    triggerBackToTop={this.triggerBackToTop}
                    {...this.state}/>
                  <About {...this.state} />
            </div>
          );
        }
      }
}

export default App;
