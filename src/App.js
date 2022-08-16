import React, {Component} from 'react';
import content_cms from "./content_cms";
import Typist from 'react-typist';
import _ from "lodash";
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import VideoWrapper from "./VideoWrapper";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textCopy: content_cms.textCopy, 
      scrollingData: content_cms.scrollingData,
      featuredProjects: content_cms.featuredProjects,
      otherProjects: content_cms.otherProjects, 
      selectedRandomColor: "blue",
      userIsActive: true,
      selectedLan: "en",
      isScrolling: false,
      counter: 0,
    };
    this.idleTimer = null;
  };

   componentDidMount(){

      const {
        scrollingData,
        selectedRandomColor,
      } = this.state;


      window.addEventListener('scroll', this.handleScroll, true);
      window.addEventListener('scroll', _.debounce(() => {

        this.setState({
          isScrolling: false,
          counter: this.state.counter+1
        }, () => {
          if(this.state.counter === this.state.scrollingData.length){
            this.setState({
              counter: 0
            })
          }
        })
      }, 500))

      const makeScrollAnimations = () => {
        let scrollAnimationsArray = _.shuffle(scrollingData)
        .map((ele, index) => {
          const style = {
            left: ele.left,
            top:  ele.top,
            color: selectedRandomColor,
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
        });   
      };

      makeScrollAnimations();   
   };


    handleScroll = (event) => {

      const {
        scrollingData,
        counter 
      } = this.state;

      this.setState({
        isScrolling: true,
        shuffledArrayData: _.shuffle(scrollingData)[counter]
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

    toggleEnFr = () => {   
      const {
        selectedLan
      } = this.state;

      if(selectedLan === "en"){
        this.setState({selectedLan: "fr"})
      }else{
        this.setState({selectedLan: "en"})
      }
    };

    render() {

      const {
        isScrolling,
        scrollAnimationsArray,
        selectedRandomColor,
        counter
      } = this.state;

      const renderScrollingContent = () => {
        
        if(isScrolling){
            let scrollingDataEle = scrollAnimationsArray[counter];
            return scrollingDataEle
          }else{
            return null;
          }
       };

        const renderFeaturedProjects = () => {
          return this.state.featuredProjects
              .map((ele, index) => {
                return (
                  <VideoWrapper
                    key={index}
                    index={index}
                    {...this.state}
                  />
                )
              });
        };
      
        const renderHeader = () => {

          const {
            selectedLan,
            textCopy,
          } = this.state;

        let selectedLanTextCopy = textCopy[selectedLan].headerDescription;

        const {
          headerDiv1,
          headline,
          main
        } = selectedLanTextCopy

        let renderHeaderLeft = () => {
          return (
            <div>
              {renturnHeaderLeftIpText()}
              {ReactHtmlParser(main)}
            </div>
          )
        };

        let renturnHeaderLeftIpText = () => {
          if(selectedLan === "en"){
            return ` Hello dear fellow online user ! `
          }else{
            return ` Bonjour cher visiteur! ` 
          }
        }

          let renderHeaderRight = () => {
            return (
              <div>
                {headerDiv1}
                <br />
                <ul>
                  <li>HTML5/CSS3/Sass</li>
                  <li>Express.js, Node.js, Socket.io</li>
                  <li>JavaScript, React.js</li>
                  <li>Gatsby, Netlify, Strapi</li>
                </ul>
              </div>
            )
          };

          let renderHeadline = () => {
            return (
              <section className="header_headline">
                <h1>
                    {ReactHtmlParser(headline)}
                </h1>
              </section>
            )
          }

          let style = {
            color: "white",
            textDecoration: "none"
          };

          return (
            <header className="header_container">
              {renderHeadline()}
              <section className="section_header_info">
                  <span
                    style={{backgroundColor: selectedRandomColor}}>
                    <a
                    style={style}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:cyrus.l.khalatbari@gmail.com">
                      EMAIL
                    </a>
                  </span>
                  <span
                    style={{backgroundColor: selectedRandomColor}}>
                    <a
                      style={style}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/cyruslk">
                      GITHUB
                    </a>
                  </span>
              </section>
              <section className="two_columns_info">
                  {renderHeaderLeft()}
                  {renderHeaderRight()}
              </section>
            </header>
          )
        };




        const renderOtherProjects = () => {

          const { 
            otherProjects,
            selectedLan,
            textCopy 
            } = this.state;
          
          let otherProjectsToJsx = otherProjects
          .map((ele, index) => {

            let otherProjectsImgToJsx = ele.imgs.map((ele, index) => {
              return <img key={index} src={ele} alt={ele} />
            })

            return (
              <div key={index}>
                <div className="horizontal_display_footer">
                  {otherProjectsImgToJsx}
                </div>
                <div className="horizontal_footer_info">
                  <div>
                    <span>{ele.name}</span>
                  </div>  
                  <div>
                    <span>
                      <a target="_blank" href={ele.url}>
                        {ele.url}
                      </a>
                      </span>
                  </div>  
              </div>
            </div>
            )
          })

          return (
            <footer>
            <section>
              <div>
                  <h2>
                    {textCopy[selectedLan].OtherWebsitesText}
                  </h2>    
                  {otherProjectsToJsx}
              </div>
            </section>
            <div className="footer_last_published">
              <div>
                {textCopy[selectedLan].lastUpdate}
              </div>
            </div>
          </footer>
          )
        };

        const renderToggleENFR = () => {

          const { selectedRandomColor} = this.state;

          return (
            <div 
              style={{backgroundColor: selectedRandomColor}}
              onClick={this.toggleEnFr}
              className="toggle_en_fr">
                {this.state.selectedLan}
            </div>
          )
        };

        if(!selectedRandomColor){
          return null;
        }else if(this.state.userIsActive){
          return (
            <div>
                  <div
                    className="App main">
                      {renderToggleENFR()}
                      {renderScrollingContent()}
                      {renderHeader()}
                      {renderFeaturedProjects()}
                      {renderOtherProjects()}
                  </div>
            </div>
          );
        }
      }
}

export default App;
