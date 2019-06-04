import React, { Component } from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import videoOne from "../../assets/videos/sample.MP4";
import ReactPlayer from "react-player";


class Banner extends Component {
  
  render() {
    
    return (
      <React.Fragment>
        
        <div id="home" className="home-video-area">
          {/* <video
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            preload="auto"
            id="bgvid"
          >
            <source src={videoOne} type="video/mp4" />
          </video> */}
          {/* <img src={gif} alt="Loading..." /> */}

          <ReactPlayer
                className="banner-video"
                url={videoOne}
                playing
                loop
                muted
                width="100%"
                height="100%"
 
              />

          <div className="video-text-area">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <span
                        className={
                          isVisible
                            ? "hero-text animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {this.props.TopTitle}
                      </span>

                      <h1
                        className={
                          isVisible
                            ? "animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {this.props.Title}
                      </h1>
                      <p
                        className={
                          isVisible
                            ? "animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {this.props.Content}
                      </p>
                      <div className="center-wrap">
                        <Link to={this.props.BtnLink} className="btn-a">
                          <div className="button">
                            {this.props.BtnName}
                            <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
        <p>
       Video used:
      </p>
      <p>Nike Running Commercial | "Steps"</p>
      <p>https://www.youtube.com/watch?v=d1qnvK3ID_w </p>
      </React.Fragment>
    );
  }
}

//Default Props
Banner.defaultProps = {
  // VideoLink: {videoOne},
  TopTitle: "Train yourself at",
  Title: "Keep Training",
  Content:
    "Totally new to body training? Leave the confusion to us. We provide detailed training videos, demonstrated by professional personal trainers, to make sure you understand every single tip. You also can share your timeline with friends here. Have fun!",
  BtnLink: "/documentation",
  BtnName: "View Documentation"
};
export default Banner;
