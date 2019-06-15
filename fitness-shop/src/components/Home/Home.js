import * as PIXI from "pixi.js";
import React, { Component } from "react";
import img1 from "../../assets/image/fitness.jpg";
import img2 from "../../assets/image/fitness-deep-map.png";
import cloud from "../../assets/image/cloud.png";

let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});
document.body.appendChild(app.view);

class Home extends Component {
  state = {
    displacementFilter: null,
    displacementSprite: null
  };

  pic = () => {
    let depthMap = new PIXI.Sprite.from(img2);
    app.stage.addChild(depthMap);
    this.state.displacementFilter = new PIXI.filters.DisplacementFilter(
      depthMap
    );

    app.stage.filters = [this.state.displacementFilter];
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
    return (
      <div>
        <div ref={this.rippleHandler}>
          <button onClick={this.rippleHandler} className="btn btn-primary">
            Ripple Effect
          </button>
          <button
            style={{ display: "block" }}
            onClick={this.pic}
            className="btn btn-primary"
          >
            Hover Movement
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
