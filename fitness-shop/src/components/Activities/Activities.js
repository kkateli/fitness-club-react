import React, { Component } from "react";
import Icofont from "react-icofont";
class Activities extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="activities" className="our-activities ptb-100">
          <div className="container">
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
          </div>

          <div className="mdb-lightbox no-margin">
            <div className="col-md-6 col-lg-4">
              <div className="work-details">
                <figure>
                  <img
                    src={this.props.cardioImg}
                    alt="Gallery"
                    className="img-fluid"
                  />
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <span
                          href="ll"
                        
                          className="popup-btn"
                        >
                          <Icofont icon="icofont-search-2" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </figure>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="work-details">
                <figure>
                  <img
                    src={this.props.YogaImg}
                    alt="Gallery"
                    className="img-fluid"
                  />
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <span
                          href="ll"
                        
                          className="popup-btn"
                        >
                          <Icofont icon="icofont-search-2" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </figure>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="work-details">
                <figure>
                  <img
                    src={this.props.weightImg}
                    alt="Gallery"
                    className="img-fluid"
                  />
                  <div className="box-content">
                    <ul className="icon">
                      <li>
                        <span
                          href="ll"
                          
                
                          className="popup-btn"
                        >
                          <Icofont icon="icofont-search-2" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Default Props
Activities.defaultProps = {
  SectionbgTitle: "Activities",
  sectionTitle: "Activities",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
  cardioImg: require("../../assets/image/cardio.jpg"),
  YogaImg: require("../../assets/image/yoga.jpg"),
  weightImg: require("../../assets/image/weight.jpg")
};

export default Activities;
