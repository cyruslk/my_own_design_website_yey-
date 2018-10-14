import React, {Component} from 'react';
import ScrollLock from 'react-scrolllock';
import './App.css';



class VideoWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


    render() {
        return (
            <div className="video_wrapper_inner">
              <ScrollLock />
            </div>
        );
    }
}

export default VideoWrapper;
