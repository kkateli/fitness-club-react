import * as PIXI from "pixi.js";
import React, { Component } from "react";
import img1 from "../../assets/image/fitness.jpg";
import img2 from "../../assets/image/fitness-deep-map.png";
import cloud from "../../assets/image/cloud.png";
import rippleButton from "../../assets/image/rippleButton.png";
import hoverButton from "../../assets/image/hoverButton.png";
import "./Home.css";

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});

class Home extends Component {
  state = {
    displacementFilter: null,
    displacementSprite: null,
    ifHover1: false,
    ifHover2: false
  };

  hoverOverButton1 = () => {
    this.setState({ ifHover1: true });
  };

  hoverOffButton1 = () => {
    this.setState({ ifHover1: false });
  };

  hoverOverButton2 = () => {
    this.setState({ ifHover2: true });
  };

  hoverOffButton2 = () => {
    this.setState({ ifHover2: false });
  };

  componentDidMount() {
    document.body.appendChild(app.view);
  }

  componentWillUnmount() {
    document.body.removeChild(app.view);
  }

  pic = () => {
    let img = new PIXI.Sprite.from(img1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);

    let depthMap = new PIXI.Sprite.from(img2);
    app.stage.addChild(depthMap);
    this.state.displacementFilter = new PIXI.filters.DisplacementFilter(
      depthMap
    );

    app.stage.filters = [this.state.displacementFilter];
    window.onmousemove = e => {
      this.state.displacementFilter.scale.x =
        (window.innerWidth / 2 - e.clientX) / 140;
      this.state.displacementFilter.scale.y =
        (window.innerHeight / 2 - e.clientY) / 20;
    };
  };

  animate = () => {
    this.state.displacementSprite.x += 8;
    this.state.displacementSprite.y += 3;
    requestAnimationFrame(this.animate);
  };

  rippleHandler = () => {
    let img = new PIXI.Sprite.from(img1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);

    this.state.displacementSprite = new PIXI.Sprite.from(cloud);
    this.state.displacementSprite.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(this.state.displacementSprite);
    this.state.displacementFilter = new PIXI.filters.DisplacementFilter(
      this.state.displacementSprite
    );
    app.stage.filters = [this.state.displacementFilter];
    this.animate();
  };

  render() {
    let arrow1 = null;
    if (this.state.ifHover1) {
      arrow1 = (
        <div className="home-arrow">
          <i class="icofont-hand-drawn-left" />
        </div>
      );
    }
    let arrow2 = null;
    if (this.state.ifHover2) {
      arrow2 = (
        <div className="home-arrow">
          <i class="icofont-hand-drawn-left" />
        </div>
      );
    }
    return (
      <div className="home-background">
        <div ref={this.rippleHandler}>
          <div className="button-control">
            <div className="the-buttons">
              <img
                onMouseOver={this.hoverOverButton1}
                onMouseOut={this.hoverOffButton1}
                onClick={this.rippleHandler}
                src={rippleButton}
                alt="ripple"
              />
              {arrow1}
            </div>
            <div className="the-buttons">
              <img
                onMouseOver={this.hoverOverButton2}
                onMouseOut={this.hoverOffButton2}
                onClick={this.pic}
                src={hoverButton}
                alt="hover"
              />
              {arrow2}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
