import React, { Component } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import Loader from "../../Loader/LoaderTwo/LoaderTwo";

// const vid=document.getElementById("video-play");
// const loaderremoved = document.getElementById("my-loader");
// if(vid){
    
//         alert("Browser has loaded the current frame");
//         loaderremoved.parentNode.removeChild(loaderremoved);
// };


class Yoga extends Component {
  state = {
    url: null,
    playing: false,
    ifSpin: false
  };
  load = url => {
    this.setState({
      url: url,
      ifSpin: true
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

  readyHandler=()=>{
      this.setState({ifSpin:false});
  }

  render() {
    console.log("render");
    let loader = null;
    if (this.state.ifSpin) {
      loader = <Loader id="my-loader"/>;
    }
    const yogaData = this.props.yogaData.map((e, index) => {
      return (
        <div className="row yoga-row" key={index}>
          <div className="col title-col">{e.title}</div>
          <div className="col-6 description-col">{e.description}</div>
          <div className="col play-col">
            <button onClick={() => this.load(e.video)}>Play</button>
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
        {loader}
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
                id="video-play"
                onReady={()=>this.readyHandler()}
                
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
