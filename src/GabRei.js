import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class GabRei extends Component {
    render() {
        return (
            <div>
                <section id="project" className="video_project">

                  <section className="component_info">
                    <h1>Website for Gab Rei. Visit online here -> <span>www.gab-rei.75-20.com</span></h1>
                  </section>

                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944777/3_tlbnsr.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944843/4_qypnv8.jpg" />
                    </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526944994/5_ggkpok.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526945338/6_unrabl.jpg" />
                    </div>
                    </div>


                </section>

            </div>

        );
    }
}

export default GabRei;
