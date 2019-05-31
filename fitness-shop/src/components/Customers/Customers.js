import React, { Component } from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/LoaderTwo/LoaderTwo";

class Customers extends Component {
  state = {
    posts: [],
    ifloading:true
  };

  //Ajax calls
  componentDidMount() {
    axios
      .get("https://fitness-club-56fdc.firebaseio.com/.json")
      .then(response => {
        //   const 
        const postId = Object.keys(response.data);
        const postList = [];
        for (let i of postId) {
          postList.push(response.data[i]);
        }

        this.setState({
          posts: postList,
          ifloading:false
        });
      })

      .then(response => {
        console.log(response);
        
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let loader=null;
    if(this.state.ifloading){
      loader=<Loader />
    }
    //Customers loop start
    //Only show 4 posts in this page.
    const shownPosts = [...this.state.posts.slice(this.state.posts.length-4, this.state.posts.length)];
    const customersdata = shownPosts.map((customers, index) => (
      <div className="col-md-6 col-lg-6" key={index}>
        <div className="customers-item">
          <Link to={customers.postLink} className="customers-img">
            <img src={customers.imagePreviewUrl} alt="customers-one" />
          </Link>
          <div className="customers-info">
            <div className="date-box">
              {customers.date} <span className="month">{customers.month}</span>
            </div>
            <div className="title-meta">
              <h2>{customers.title}</h2>
              <div className="post-meta">
                <ul>
                  <li>
                    <Icofont icon="icofont-funky-man" /> Posted By:{" "}
                    {customers.name}
                  </li>
                  <li>
                    <Icofont icon="icofont-tags" /> Tags: {customers.tag}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="post-content">
            <p>{customers.content}</p>
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
                  <span className="section-title-bg">
                    {this.props.SectionbgTitle}
                  </span>
                </div>
              </div>
            </div>
            {loader}

            <div className="row">
              {customersdata}
              
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Default Props
Customers.defaultProps = {
  SectionbgTitle: "Posts",
  sectionTitle: "Member Posts",
  sectionDescription:
    "New post submitted will show here.",
  customersData: [
    {
      // postImage: require("../../../assets/image/c1.jpg"),
      postLink: "/customers-details",
      date: "25",
      month: "Feb",
      posttitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      postContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
      authorName: "Kate",
      TagName: "lifestyle"
    }
  ]
};

export default Customers;
