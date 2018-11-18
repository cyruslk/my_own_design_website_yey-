import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class ComponentImgWrapper extends Component {


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }

    render() {
        return (
          <div>
                <section className="component_info">
                <h1>Posters for La Rama Records. Located at: 77 Bernard West , H2T 2J9, Montréal, QC.</h1>
              </section>
              <section className="poster_project">
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526963313/1__larama_poster_gsltwk.jpg" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526963313/2__larama_poster_am9mi8.jpg" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526963311/3__larama_poster_ctjnkx.jpg" />
                </div>
              </section>
              </div>

        );
    }
}

export default ComponentImgWrapper;
