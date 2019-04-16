import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './App.css';

class VideoWrapper extends Component {

  targetElement = null;

  constructor(props) {
    super(props);
    this.state = {
    }
  }




    render() {

      if(!this.props.data){
        return(
          <div>loading</div>
        )
      }else{
        const data = this.props.data[0];
        const returnVideo = data.source.map((ele, index) => {
          return (
            <div className="video_wrapper" key={index}>
              <div className="video_wrapper_inner">
              <video
                autoPlay
                loop
                muted
                control="true">
                <source src={ele} type="video/mp4" />
              </video>
            </div>
            </div>
          )
        })
        return(
          <div
            className="video_main">
            {returnVideo}
            <h1>{ReactHtmlParser(data.h1)}</h1>
            <a href={this.state.link} target="_blank" className={data.class}>
            <span className={data.class}>{data.span}</span>
            </a>
          </div>
        )
      }
    }
}

export default VideoWrapper;
