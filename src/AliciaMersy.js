import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class AliciaMersy extends Component {
    render() {
        return (
            <div>
            <section id="project" className="video_project">

                    <section className="component_info">
                      <h1>Website for Alicia Mersy. Visit online here -> <span>www.aliciamersy.com</span></h1>
                    </section>

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


                </section>

            </div>

        );
    }
}

export default AliciaMersy;
