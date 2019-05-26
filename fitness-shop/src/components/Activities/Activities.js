import React, { Component } from "react";
import Icofont from "react-icofont";
import { MDBContainer, MDBRow } from "mdbreact";
import {Link} from "react-router-dom";

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
          <MDBContainer>
            <div className="mdb-lightbox no-margin">
              <MDBRow>
                <div className="col-md-6 col-lg-4">
                  <div className="activity-details">
                      <Link to='/cardio'>
                      <figure>
                      <img
                        src={this.props.cardioImg}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span className="popup-btn">
                              <Icofont icon="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                      </Link>
                   
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="activity-details">
                      <Link to="/yoga"> 
                      <figure>
                      <img
                        src={this.props.YogaImg}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span className="popup-btn">
                              <Icofont icon="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                      </Link>
                    
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="activity-details">
                      <Link to="/weight">
                      <figure>
                      <img
                        src={this.props.weightImg}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span className="popup-btn">
                              <Icofont icon="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                      </Link>
                    
                  </div>
                </div>
              </MDBRow>
            </div>
          </MDBContainer>
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
