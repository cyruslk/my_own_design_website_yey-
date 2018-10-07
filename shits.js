import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AliciaMersy from './AliciaMersy.js';

import {Player, ControlBar, PlayToggle} from 'video-react';
var emoji = require('node-emoji')


class App extends Component {
    render() {

        let v_d = "vie d'ange"
        let s = "'s";

        var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
     };

        return (
            <div className="App">

                <section id="intro">

                    <h1>many-to-many is the design & programming practice of cyruslk.com</h1>
                    <h1>☯ For any inquiry:
                        <span>info@many-to-many.com</span>
                        ☯</h1>


                </section>

                <AliciaMersy title={"wwww.aliciamersy.com"}/>

                <section id="project" className="dyptich_project">
                    <p>
                        <span>{v_d}: PDF & Website</span>
                        is a set of digital deliverables made for {v_d}, an
                         Art Venue from Montréal located in an old Garage. Ranging from a handwritten logo to a responsive website and a set of - Press Kit - PDFs, each element follows the same logic as the physical architecture that underlies this space: attempting to create a visual tension between the cold grid - of the concrete - and the noise - of the surroundings.</p>

                    <img className="big_img" src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1522627557/logo_viedange_kfwyfh.svg"/>

                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526936219/3_uedwbv.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935067/3_xftsty.jpg" />
                      </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935602/3_myqq2u.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526935809/3_zf4pjc.jpg" />
                      </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941210/3_hnlz4w.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941364/3_fzhbg1.jpg" />
                      </div>
                    </div>
                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941796/3_tk3edj.jpg" />
                      </div>
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1526941540/3_dn4saw.jpg" />                      </div>
                    </div>




                </section>

                <div><span className="single_span">Posters for La Rama</span></div>

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


                <section id="project" className="dyptich_project">
                    <p>
                        <span>{v_d}: PDF</span>
                        is a set of PDF made for the Montréal{s}
                        Art Venue. Starting from this handwritten logo, each Exhibition{s}</p>

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



                <section id="project" className="dyptich_project">
                    <p>
                        <span>{v_d}: PDF</span>
                        is a set of PDF made for the Montréal{s}
                        Art Venue. Starting from this handwritten logo, each Exhibition{s}</p>

                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1531439636/gene_3_a5dwsy.jpg" />
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

                <section id="project" className="dyptich_project">
                    <p>
                        <span>{v_d}: PDF</span>
                        is a set of PDF made for the Montréal{s}
                        Art Venue. Starting from this handwritten logo, each Exhibition{s}</p>

                    <div className="flex_div">
                      <div>
                      <img src="https://res.cloudinary.com/www-c-t-l-k-com/image/upload/v1531439636/gene_3_a5dwsy.jpg" />
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




                <section id="intro">

                    <h1>c-t-l-k is the design practice of cyruslk.com</h1>
                    <h1>☯ For any inquiry:
                        <span>info@c-t-l-k.com</span>
                        ☯</h1>
                </section>

            </div>

        );
    }
}

export default App;
