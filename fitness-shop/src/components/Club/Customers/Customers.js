import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';


class Customers extends Component {
    
  render() {
    //Customers loop start
    const customersdata = this.props.customerssData.map((customers, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="customers-item">
                <Link to={customers.postLink} className="customers-img"><img src={customers.postImage} alt="customers-one" /></Link>
                <div className="customers-info">
                    <div className="date-box">
                        {customers.date} <span className="month">{customers.month}</span>
                    </div>
                    <div className="title-meta">
                        <h2><Link to={customers.postLink}>{customers.posttitle}</Link></h2>
                        <div className="post-meta">
                            <ul>
                                <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={customers.authorLink}>{customers.authorName}</Link></li>
                                <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={customers.CommentsLink}>{customers.TotalComments}</Link></li>
                                <li><Icofont icon="icofont-tags" /> Tags: <Link to={customers.TagLink}>{customers.TagName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <p>{customers.postContent}</p>
                </div>
            </div>
        </div>
    ));
    //Customers loop END
    return (
        <React.Fragment>
            <section id="customers" className="our-customers ptb-100">
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
                        {customersdata}
                        <div className="col-lg-12 col-md-12 all-post">
                            <div className="center-wrap">
                            <Link to={this.props.btnLink} className="btn-a">
                                <div className="button">
                                    {this.props.CustomersBtn} <Icofont icon="icofont-long-arrow-right" />
                                    <div className="mask"></div>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}

//Default Props
Customers.defaultProps = {
    SectionbgTitle: "Customers",
    sectionTitle: "Our Customers",
    sectionDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    btnLink: "/customers-one",
    CustomersBtn: "View All Post",
        customerssData: [
        {
            postImage: require("../../../assets/image/c1.jpg"),
            postLink: "/customers-details",
            date: "25",
            month: "Feb",
            posttitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Kate",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0", 
        },
        {
            postImage: require("../../../assets/image/c2.jpg"),
            postLink: "/customers-details",
            date: "10",
            month: "Feb",
            posttitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Kate",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0", 
        },
        {
            postImage: require("../../../assets/image/c3.jpg"),
            postLink: "/customers-details",
            date: "30",
            month: "Jan",
            posttitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Kate",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0", 
        },
        {
            postImage: require("../../../assets/image/c4.jpg"),
            postLink: "/customers-details",
            date: "20",
            month: "Jan",
            posttitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Kate",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0", 
        },

    ]
};

export default Customers;
