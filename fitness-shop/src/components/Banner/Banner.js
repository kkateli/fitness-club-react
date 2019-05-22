import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import videoOne from "../../assets/videos/sample.MP4";


class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="home" className="home-video-area">
                    <video autoPlay="autoplay" loop="loop" muted="muted" preload="auto" id="bgvid">
                        <source src={videoOne} type="video/mp4"/> 
                    </video> 
                
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
                                                <div className="mask" /></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </VisibilitySensor>
                    </div>
                </div>    
            </React.Fragment>
        );
    }
}

//Default Props
Banner.defaultProps = {
    // VideoLink: {videoOne},
    TopTitle: "Lorem ipsum dolor sit amet",
    Title: "Lorem ipsum dolor sit amet",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    BtnLink:  "/documentation",
    BtnName: "View Documentation",
};
export default Banner;
