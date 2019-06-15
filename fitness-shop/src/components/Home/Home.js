import * as PIXI from "pixi.js";
import React, { Component } from "react";
import img1 from "../../assets/image/fitness.jpg";
import img2 from "../../assets/image/fitness-deep-map.png";
import cloud from "../../assets/image/cloud.png";
import rippleButton from "../../assets/image/rippleButton.png";
import hoverButton from "../../assets/image/hoverButton.png";
import "./Home.css";




class Home extends Component {
  state = {
    displacementFilter: null,
    displacementSprite: null,
    app : new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight
      })
  };

  

  pic = () => {
    document.body.appendChild(this.state.app.view);

    let img = new PIXI.Sprite.from(img1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    this.state.app.stage.addChild(img);

    let depthMap = new PIXI.Sprite.from(img2);
    this.state.app.stage.addChild(depthMap);
    this.state.displacementFilter = new PIXI.filters.DisplacementFilter(
      depthMap
    );

    this.state.app.stage.filters = [this.state.displacementFilter];
    window.onmousemove = e => {
      this.state.displacementFilter.scale.x =
        (window.innerWidth / 2 - e.clientX) / 40;
      this.state.displacementFilter.scale.y =
        (window.innerHeight / 2 - e.clientY) / 40;
    };
    
  };

  animate = () => {
    this.state.displacementSprite.x += 8;
    this.state.displacementSprite.y += 3;
    requestAnimationFrame(this.animate);
  };

  rippleHandler = () => {
    document.body.appendChild(this.state.app.view);
    let img = new PIXI.Sprite.from(img1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    this.state.app.stage.addChild(img);

    this.state.displacementSprite = new PIXI.Sprite.from(cloud);
    this.state.displacementSprite.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    this.state.app.stage.addChild(this.state.displacementSprite);
    this.state.displacementFilter = new PIXI.filters.DisplacementFilter(
      this.state.displacementSprite
    );
    this.state.app.stage.filters = [this.state.displacementFilter];
    this.animate();
    
  };

  render() {
    return (
      <div className="home-background">
        <div ref={this.rippleHandler}>
          <div className="button-control">
            <img onClick={this.rippleHandler} src={rippleButton} alt="ripple" />
            <img onClick={this.pic} src={hoverButton} alt="hover" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;