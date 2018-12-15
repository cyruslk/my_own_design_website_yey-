import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './App.css';



class VideoWrapper extends Component {

  targetElement = null;


  constructor(props) {
    super(props);
    this.state = {
      source: this.props.props[0].source,
      h1: this.props.props[0].h1,
      span: this.props.props[0].span,
      link: this.props.props[0].link,
      class: this.props.props[0].class
    }
  }




    render() {
      const returnVideo = this.state.source.map((ele, index) => {
        return (
          <div className="video_wrapper" key={index}>
          <div className="video_wrapper_inner">
            <video autoPlay loop muted control="true">
              <source src={ele} type="video/mp4" />
            </video>
          </div>
          </div>
        )
      })
        return (
            <div className="video_main">
              {returnVideo}
              <h1>{this.state.h1}</h1>
              <a href={this.state.link} target="_blank" className={this.state.class}>
              <span className={this.state.class}>{this.state.span}</span>
              </a>
            </div>

        );
    }
}

export default VideoWrapper;
