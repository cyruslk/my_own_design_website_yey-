import React, {Component} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './App.css';



class VideoWrapper extends Component {

  targetElement = null;


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
      document.querySelector(".logs").style.backgroundColor = "white";
      document.querySelector(".logs").style.zIndex = "100";
      document.querySelector(".logs").style.color = "black";
  }


  componentWillUnmount() {
      document.querySelector(".logs").style.backgroundColor = "black";
      document.querySelector(".logs").style.zIndex = "100";
      document.querySelector(".logs").style.color = "white";
  }


    render() {
        return (
            <div className="video_wrapper_inner">

              <video autoPlay loop>
                <source src={this.props.source} type="video/mp4" />
              </video>

            </div>
        );
    }
}

export default VideoWrapper;
