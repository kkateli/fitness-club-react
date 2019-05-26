import React, { Component } from "react";
import ReactPlayer from "react-player";

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
      played: 0,
      loaded: 0,
      pip: false
    });
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  stop = () => {
    this.setState({ url: null, playing: false });
  };

  render() {
    const yogaData = this.props.yogaData.map((e, index) => {
      return (
        <div className="row yoga-row" key={index}>
          <div className="col title-col">{e.title}</div>
          <div className="col-6 description-col">{e.description}</div>
          <div className="col play-col">
            <button>Play</button>

            {/* <video
            controls="controls" preload="none" onclick="this.play()"
          >
            <source src={} type="video/mp4" />
          </video>  */}
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
        
        <div className="player">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player yoga-player"
              url="https://www.youtube.com/watch?v=nQFf38xeBww"
              playing={this.state.playing}
              width='100%'
              height='100%'
            />
          </div>

          <table className="player-control"><tbody>
            <tr>
              <th>Controls</th>
              <td>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.playPause}>
                  {this.state.playing ? "Pause" : "Play"}
                </button>
            
            </td>
           
            </tr>
            </tbody>
          </table>
          
        </div>
        
        {yogaData}
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
      title: "5 Yoga Poses to Lose Weight Quickly And Easily",
      description: "From VENTUNO YOGA",
      video: "https://www.youtube.com/watch?v=nQFf38xeBww"
    }
  ]
};
export default Yoga;
