import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel3";


class Club extends Component {
  render() {
    //Club loop start
    const clubdata = this.props.clubsData.map((club, index) => (
        <div className="club-box" key={index}>
            <img src={club.Image} alt="Description" />
            <div className="box-content">
                <div className="box-inner-content">
                    <h3 className="title">{club.Name}</h3>
                    <span className="post">{club.Profession}</span>
                    <ul className="icon">
                        <li><Link to={club.facebookLink}><Icofont icon="icofont-facebook" /></Link></li>
                        <li><Link to={club.linkedinLink}><Icofont icon="icofont-linkedin" /></Link></li>
                        <li><Link to={club.twitterLink}><Icofont icon="icofont-twitter" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    ));
    //Club loop END
    return (
        <React.Fragment>
             <section id="club" className="our-club ptb-100">
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
                    <OwlCarousel
                        className="owl-theme club-slides"
                        dots= {false}
                        autoplay= {true}
                        loop= {true}
                        margin={30}
                        nav={true}
                        smartSpeed= {1000}
                        autoplayHoverPause= {true}
                        navText= {[
                            "<i class='icofont-arrow-left'></i>", 
                            "<i class='icofont-arrow-right'></i>"
                        ]}
                        responsive={{
                            0: { items: 1 },
                            768: {
                                items: 2
                            },
                            1024: {
                                items: 3
                            },
                            1200: {
                                items: 3
                            }
                        }}
                    >
                        {clubdata}
                    </OwlCarousel>
                </div>
            </div>
        </section>   
        </React.Fragment>
    );
  }
}

//Default Props
Club.defaultProps = {
    SectionbgTitle: "Trainers",
    sectionTitle: "Our Trainers",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
        clubsData: [
        {
            Image: require("../../assets/image/t1.jpg"),
            Name: "Name1",
            Profession: "Trainer",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
        },
        {
            Image:require("../../assets/image/t2.jpg") ,
            Name: "Name2",
            Profession: "Trainer",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
        },
        {
            Image: require("../../assets/image/t3.jpg"),
            Name: "Name3",
            Profession: "Trainer",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
        },
        {
            Image:require("../../assets/image/t4.jpg"),
            Name: "Name4",
            Profession: "Trainer",
            facebookLink: "/#0",
            linkedinLink: "/#0",
            twitterLink: "/#0",
        },
        
    ]
};

export default Club;
