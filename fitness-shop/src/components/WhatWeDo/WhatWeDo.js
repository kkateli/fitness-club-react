import React, { Component } from 'react';
import Icofont from 'react-icofont';
import Club from "../Club/Club";


class WhatWeDo extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                    <Icofont icon={service.icon} />
                </div>
                <h3>{service.heading}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                           
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                           
                        </div>
                    </div>
                    <div className="row">
                        {servicedata}
                    </div>
                </div>
            </section>
            <Club />
        </React.Fragment>
    );
  }
}


//Default Props
WhatWeDo.defaultProps = {
    SectionbgTitle: "What We Do",
    sectionTitle: "What We Do",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

    servicesData: [
        {
            icon: "icofont-cycling-alt",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
        {
            icon: "icofont-dumbbell",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
        {
            icon: "icofont-gym-alt-2",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
        {
            icon: "icofont-muscle",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
        {
            icon: "icofont-gym",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
        {
            icon: "icofont-runner-alt-1",
            heading: "Lorem ipsum dolor sit amet",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum."
        },
    ]
};

export default WhatWeDo;
