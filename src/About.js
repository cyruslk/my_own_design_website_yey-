import React, {Component} from 'react';
import Typist from 'react-typist';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class About extends Component {

    render(){
      return(
        <div className="about_container">
          <div className="about_container_inner">
            <header className="header_container">
              <section>
                  <span>
                    ABOUT
                  </span>
              </section>
            </header>
            <main>
            {ReactHtmlParser(this.props.MaininfoData)}
            </main>
          </div>
        </div>
      )

    }
}

export default About;
