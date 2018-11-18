import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class ComponentWrapper extends Component {


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
                <section id="project" className="video_project">

                  <section className="component_info">
                      <h1>{this.props.props[0].h1}
                      <span><a href={this.props.props[0].link} target="_blank">
                      {this.props.props[0].span}
                      </a></span></h1>
                  </section>

                    <section className="wrapper_img"
                    style={{backgroundColor: this.props.props[0].backgroundColor}}>
                    <div className="flex_div">
                      <div>
                      <img src={this.props.props[0].img[0]} />
                      </div>
                      <div>
                      <img src={this.props.props[0].img[1]} />
                    </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src={this.props.props[0].img[2]} />
                      </div>
                      <div>
                      <img src={this.props.props[0].img[3]} />
                    </div>
                    </div>
                </section>
                </section>


            </div>

        );
    }
}

export default ComponentWrapper;
