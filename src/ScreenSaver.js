import React, {Component} from 'react';
import './App.css';

class ScreenSaver extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenSaverData: null
    }
  }

  componentDidMount(){
    if(this.props){
      this.setState({
        screenSaverData: this.props.processData
      })
    }
  }
    render(){
      if(!this.state.screenSaverData){
        return (
          <div>loading</div>
        )
      }else{
        const renderedData = this.state.screenSaverData
        .map((ele, index) => {

          const returnNameFile = () => {
            let nameFile = ele.split("/");
            return nameFile[nameFile.length - 1]
          }

          console.log(returnNameFile());

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
          <div className="iddle_inner">
            <header className="header_container">
              <section
                style={{borderBottom: `1px solid ${this.props.selectedRandomColor}`}}
                >
                <h1
                  style={{color: this.props.selectedRandomColor}}
                  onClick={this.props.isDisplayedProcess}>
                  BACK
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

export default ScreenSaver;
