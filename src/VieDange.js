import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
var emoji = require('node-emoji')


class VieDange extends Component {
    render() {

        const v_d = "vie d'ange"

        return (



            <div>
            <section id="project" className="dyptich_project">

                <section className="component_info">
                  <h1>Full Website (V1) & Press-kits for {v_d}. Visit online here -> <span>www.viedange.75-20.com</span></h1>
                </section>

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

            </div>

        );
    }
}

export default VieDange;
