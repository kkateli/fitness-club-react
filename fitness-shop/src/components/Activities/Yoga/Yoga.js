import React, { Component } from "react";


class Yoga extends Component {
  render() {
    const yogaData = this.props.yogaData.map((e,index) => {
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
          title:"5 Yoga Poses to Lose Weight Quickly And Easily",
          description:"From VENTUNO YOGA",
          video:""

        
      }
    ]
  };
export default Yoga;
