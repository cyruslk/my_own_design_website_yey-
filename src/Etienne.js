import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Vimeo from '@u-wave/react-vimeo';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import {Player, ControlBar, PlayToggle} from 'video-react';

var emoji = require('node-emoji')


class Etienne extends Component {


    targetElement = null;

    constructor(props){
      super(props);
      this.state = {
        toggle: true,
        visibility: "hidden"
      }
      this._onMouseClick = this._onMouseClick.bind(this);
      this.lockBody = this.lockBody.bind(this);
      this.relaseBody = this.relaseBody.bind(this);
    }

    _onMouseClick(){
      this.setState({
        toggle: !this.state.toggle
      })
      if(this.state.toggle){
        this.setState({
          visibility: "visible"
        })
        console.log("is this working??");
        this.lockBody();
      }else{
        this.setState({
          visibility: "hidden"
        })
        console.log("is this working??");
        this.relaseBody();
      }
    }

    lockBody(){
      document.body.className = "overflow_hidden" ;
    }
    relaseBody(){
      document.body.className = "" ;
    }


    render() {
        return (
            <div>
                <section id="project" className="video_project">

                  <section className="component_info">
                    <h1>Website (V1) for Étienne Chartrand. Visit online here -> <span>www.etiennechartrand.com</span></h1>

                    <div className="vid_button">
                    <span>vid?</span>
                    </div>

                  </section>

                  <div className="video_flex" style={{visibility: this.state.visibility}}>

                  <section className="component_info">
                    <h1>Website for Alicia Mersy. Visit online here -> <span>www.aliciamersy.com</span></h1>

                    <div className="vid_button" onClick={this._onMouseClick}>
                    <span>close the vid?</span>
                    </div>

                  </section>

                  <Vimeo
                      width={1296}
                      background={true}
                      height={540}
                      video={271027450}
                      className="vimeo_container"
                    />
                  </div>

                    <section className="wrapper_etienne">

                    <div className="flex_div">
                      <div>
                      <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526942335/3_kj5okl.jpg" />
                      </div>
                      <div>
                      <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526942663/4_hwknpl.jpg" />
                    </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538858982/e__4_l0bny7.jpg" />
                      </div>
                      <div>
                      <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538859246/e__5_aehlbl.jpg" />
                    </div>
                    </div>

                    </section>



                </section>

            </div>

        );
    }
}

export default Etienne;
