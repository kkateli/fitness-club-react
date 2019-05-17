import React, { Component } from "react";
import Icofont from "react-icofont";
import cssClasses from "./Nav.module.css";

class NavBar extends Component {
  render() {
    return (
      <div>
          
        {/* Top Header */}
        <div className={cssClasses.topHeader}>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className={cssClasses.addressBar}>
                  <ul className={cssClasses.listInline}>
                    <li>
                      <a href={this.props.mailLink}>
                        <Icofont icon="icofont-email" /> {this.props.mail}
                      </a>
                    </li>
                    <li>
                      <a href={this.props.numberLink}>
                        <Icofont icon="icofont-ui-call" /> {this.props.Number}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-md-5">
                <div className={cssClasses.socialIcons}>
                  <ul className={cssClasses.listInline}>
                    <li>
                      <a
                        href={this.props.facebookLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.twitterLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={this.props.instagramLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icofont icon="icofont-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    );
  }
}



//Default Props
NavBar.defaultProps = {
  // MainLogo: require(''),
  // Logo2: require(''),
  mailLink: "email@mail.com",
  mail: "example@example.com ",
  numberLink: "+123456",
  Number: "+12345",
  facebookLink: "Facebook link",
  twitterLink: "Twitter link",
  instagramLink: "Ins link"
};
export default NavBar;
