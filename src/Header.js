import React, {Component} from 'react';
import './App.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

    render() {
      return (
        <section id="intro_buttons">
            <div className="left_buttons">
            <span>EMAIL</span>
            <span>GITHUB</span>
            <span>PGP KEY</span>
            <span onClick={this.triggerClickMain}>INFO</span>
            </div>
            <div className="right_buttons">
            <h1>Hello there IP: {this.state.ip_user}, welcome to my website.</h1>
            <h1>Here you'll find a selection of my latest projects. For more, hit info.</h1>
            </div>
        </section>
      )
    }
}

export default Header;
