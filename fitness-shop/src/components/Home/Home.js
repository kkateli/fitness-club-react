import * as PIXI from "pixi.js";
import React, { Component } from "react";
import img1 from "../../assets/image/fitness.jpg";
import img2 from "../../assets/image/fitness-deep-map.png";
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});
document.body.appendChild(app.view);
class Home extends Component {
  pic = () => {
    let img = new PIXI.Sprite.from(img1);
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    app.stage.addChild(img);
    let depthMap = new PIXI.Sprite.from(img2);
    app.stage.addChild(depthMap);

    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
    window.onmousemove = (e)=>{
        displacementFilter.scale.x = (window.innerWidth/2-e.clientX)/40;
        displacementFilter.scale.y = (window.innerHeight/2 - e.clientY)/40;
    }
  };
  
  render() {
    return <div ref={this.pic} />;
  }
}
export default Home;
