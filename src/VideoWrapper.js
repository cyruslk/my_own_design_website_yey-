import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class VideoWrapper extends Component {



    render() {
      if(!this.props.data){
        return(
          <div className="loading">loading</div>
        )
      }else{
        const data = this.props.data[0];
        const returnVideo = data.source.map((ele, index) => {
          return (
            <div className="video_wrapper"
              id={`wrapper_${index}`} key={index}>
              <div className="video_wrapper_inner">
              <video
                autoPlay
                loop
                muted>
                <source src={ele} type="video/mp4" />
              </video>
            </div>
            </div>
          )
        })

        const returnAdditionalImages = () => {
          if(data.img && data.additional_type === "screenshots"){
            const additionalImages = data.img.map((ele, index) => {
              return (
                <div key={index}>
                  <img
                    alt={ele}
                    src={ele} />
                </div>
              )
            })

            return (
              <section className="additional_screens">
                <div className="additional_screens_inner">
                  {additionalImages}
                </div>
              </section>
            )
          }else{
            return null;
          }

        }

        return(
          <div
            onScroll={this.handleScroll}
            className="video_main">
            {returnVideo}
            <div
              className="info_video">
              <div className="info_video_h1">
                <h1
                  style={{color: this.props.selectedRandomColor}}>
                  {ReactHtmlParser(data.h1)}
                </h1>
              </div>
              <div>
                <span className={data.class}>
                  <a
                    href={data.link}
                    style={{color: this.props.selectedRandomColor}}
                    target="_blank"
                    className={data.class}>
                      {data.span}
                  </a>
                </span>
              </div>
            </div>
             {returnAdditionalImages()}
          </div>
        )
      }
    }
}

export default VideoWrapper;
