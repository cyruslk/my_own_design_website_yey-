import React, {Component} from 'react';
import _ from "lodash";
import './App.css';

class Archives extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ArchivesData: null
    }
  }

  componentDidMount(){
    if(this.props){
      this.setState({
        ArchivesData: _.shuffle(this.props.processData)
      })
    }
  }
    render(){
      if(!this.state.ArchivesData){
        return (
          <div>loading</div>
        )
      }else{
        const renderedData = this.state.ArchivesData
        .map((ele, index) => {

          const returnNameFile = () => {
            let nameFile = ele.split("/");
            return nameFile[nameFile.length - 1]
          }


          return (
            <div className="iddle_img_div">
              <img
                key={index}
                className="iddle_img"
                alt={ele}
                src={ele}
              />
            <span
              style={{color: this.props.selectedRandomColor}}>
              {returnNameFile()}
            </span>
            </div>
          )
        })
        return(
          <div className="archives_inner">
            <header className="header_container">
              <section>
                <h1>
                  <span>
                    ARCHIVES
                  </span>
                </h1>
                <h1>
                  <span>
                    UP
                  </span>
                </h1>
              </section>
            </header>
            <section>
            {renderedData}
            </section>
          </div>
        )
      }

    }
}

export default Archives;
