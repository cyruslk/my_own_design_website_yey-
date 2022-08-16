import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class VideoWrapper extends Component {
    render() {

      if(!this.props){
        return(
          <div className="loading">loading</div>
        )
      }else{

        const { 
          index, 
          selectedLan, 
          featuredProjects, 
          textCopy, 
          selectedRandomColor
        } = this.props;

        const selectedfeaturedProjects = featuredProjects[index];
        const selectedfeaturedProjectsText = selectedfeaturedProjects[0];
        const selectedTextData = textCopy[selectedLan].projectsDescription[index];

        const renderVideo = selectedfeaturedProjects.map((ele, index) => {
          return (
            <div className="video_wrapper"
              id={`wrapper_${index}`} key={index}>
                <div className="video_wrapper_inner">
                <video
                  autoPlay
                  loop
                  muted>
                  <source src={ele.source} type="video/mp4" />
                </video>
              </div>
            </div>
          )
        });

        const renderImgMobile = () => {

          const {img} = selectedfeaturedProjectsText;

          let imgToJsx = img.map((ele, index) => {
            return <img src={ele} key={ele} alt={ele}/>
          })

          return (
            <div className="video_stills_mobile">
                {imgToJsx}
            </div>
          )
        }

          return (
            <div>
              <div
                onScroll={this.handleScroll}
                className="video_main">
                {renderVideo}
                  <div
                    className="info_video">
                        <div className="info_video_h1">
                          <h1>
                            {ReactHtmlParser(selectedfeaturedProjectsText.h1)}
                          </h1> 
                          <span className={selectedfeaturedProjectsText.class}>
                            <a
                              href={selectedfeaturedProjectsText.link}
                              style={{color: this.props.selectedRandomColor}}
                              target="_blank"
                              className={selectedfeaturedProjectsText.class}
                              >
                                {selectedfeaturedProjectsText.span}
                            </a>
                          </span>
                        </div>
                  </div>
                  {renderImgMobile()}
                  <section className="video_two_columns_info">
                    <div>
                        {selectedTextData}
                    </div>
                </section>
                </div>
            </div>
          )

      }
    }
}

export default VideoWrapper;

