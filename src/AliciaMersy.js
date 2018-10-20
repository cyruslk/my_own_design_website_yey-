import React, {Component} from 'react';
import VideoWrapper from './VideoWrapper.js';
import logo from './logo.svg';
import './App.css';
import Vimeo from '@u-wave/react-vimeo';
import Lightbox from 'react-images-texts-videos';
import {ScrollLocky} from 'react-scroll-locky';
var emoji = require('node-emoji');


class AliciaMersy extends Component {

  targetElement = null;


  constructor(props){
    super(props);
    this.state = {
      toggle: true,
      visibility: "hidden"
    }
    this._onMouseClick = this._onMouseClick.bind(this);
    this._removePopup - this._removePopup.bind(this);
  }

  _onMouseClick(){
    this.setState({
      toggle: !this.state.toggle
    })
    if(this.state.toggle){
      this.setState({
        visibility: "visible"
      })
    }else{
      this.setState({
        visibility: "hidden"
      })
    }
  }


  _removePopup(){
    alert("working?")
  }


    render() {
      if(this.state.visibility === "hidden"){
        return (
          <div>
          <section className="vid_popup">
          </section>
          <section id="project" className="video_project">

              <section className="component_info">
                <h1>Website for Alicia Mersy. Visit online here -> <span>www.aliciamersy.com</span></h1>

                <div className="vid_button" onClick={this._onMouseClick}>
                <span>vid?</span>
                </div>
              </section>

              <div className="imgs_flex">
              <div className="flex_div">
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg" />
                </div>
              </div>
              <div className="flex_div">
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934697/3_hf2aus.jpg" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526934840/3_tvmllo.jpg" />
                </div>
              </div>
              </div>
              </section>
          </div>
        )
      }else{
        return (
          <div>
          <section className="vid_popup">
          </section>
          <section id="project" className="video_project">

              <section className="component_info">
                <h1>Website for Alicia Mersy. Visit online here -> <span>www.aliciamersy.com</span></h1>

                <div className="vid_button" onClick={this._onMouseClick}>
                <span>vid?</span>
                </div>
              </section>

              <div className="imgs_flex">
              <div className="flex_div">
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933788/3_icfqlh.jpg" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526933875/3_ufhnzf.jpg" />
                </div>
              </div>
              <div className="flex_div">
                <div>
                <VideoWrapper source={"http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1539576736/vid_jeanne_iowqfm.mov"}/>
                </div>
                <div>
                  <VideoWrapper source={"http://res.cloudinary.com/www-c-t-l-k-com/video/upload/v1539576736/vid_jeanne_iowqfm.mov"}/>
                </div>
              </div>
              </div>
              </section>
          </div>
        );
      }

    }
}

export default AliciaMersy;
