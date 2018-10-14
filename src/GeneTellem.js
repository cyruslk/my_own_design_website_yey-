import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './App.css';


class GeneTellem extends Component {
    render() {
        return (
            <div>
                <section id="project" className="video_project">

                <section className="component_info">
                  <h1>Website for Gene Tellem. Visit online here -> <span>www.genetellem.com</span></h1>

                  <div className="vid_button">
                  <span>vid?</span>
                  </div>


                </section>

                <div className="flex_div">
                  <div>
                  <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852898/gene_1_rczvs6.jpg" />
                  </div>
                  <div>
                  <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852899/gene_3_c3fctr.jpg" />
                  </div>
                </div>
                <div className="flex_div">
                  <div>
                  <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538852899/gene_6_njomuv.jpg" />
                  </div>
                  <div>
                  <img src="http://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1538853965/gene_12_omkl7v.jpg" />
                  </div>
                </div>


                </section>

            </div>

        );
    }
}

export default GeneTellem;
