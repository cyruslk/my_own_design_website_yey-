import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class Etienne extends Component {
    render() {
        return (
            <div>
                <section id="project" className="video_project">

                  <section className="component_info">
                    <h1>Website (V1) for Étienne Chartrand. Visit online here -> <span>www.etiennechartrand.com</span></h1>
                  </section>

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
