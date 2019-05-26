import React, { Component } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";

class Yoga extends Component {
  state = {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,

    muted: false,

    duration: 0,
    playbackRate: 1.0,
    loop: false
  };
  load = url => {
    this.setState({
      url,
      pip: false
    });
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  stop = () => {
    this.setState({ url: null, playing: false });
  };

  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };
  togglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const yogaData = this.props.yogaData.map((e, index) => {
      return (
        <div className="row yoga-row" key={index}>
          <div className="col title-col">{e.title}</div>
          <div className="col-6 description-col">{e.description}</div>
          <div className="col play-col">
          <button onClick={() =>this.load(e.video)} >Play</button>
          </div>
        </div>
      );
    });
    return (
      <section id="activities" className="our-activities ptb-100">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h2>{this.props.sectionTitle}</h2>
              <p>{this.props.sectionDescription}</p>
              <span className="section-title-bg">
                {this.props.SectionbgTitle}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-7 ">{yogaData}</div>
          <div className="player col-lg-5 col-sm-7">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={this.state.url}
                playing={this.state.playing}
                ref={this.ref}
                width="540px"
              />
            </div>

            <table className="player-control">
              <tbody>
                <tr>
                  <td>
                    <button onClick={this.playPause}>
                      {this.state.playing ? "Pause" : "Continue"}
                    </button>
                    <button onClick={this.onClickFullscreen}>Fullscreen</button>

                    <button onClick={this.stop}>Turn Off</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
//Default Props
Yoga.defaultProps = {
  SectionbgTitle: "Yoga",
  sectionTitle: "Yoga",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
  yogaData: [
    {
      title: "Take 5 Yoga Break!",
      description: "Yoga Quickies | Yoga With Adriene",
      video: "https://www.youtube.com/watch?v=ky0FGlVKfRw&t=14s"
    },
    {
      title: "5 Yoga Poses to Lose Weight Quickly And Easily",
      description: "From VENTUNO YOGA",
      video: "https://www.youtube.com/watch?v=nQFf38xeBww"
    }
  ]
};
export default Yoga;
