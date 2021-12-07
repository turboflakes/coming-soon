import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo_mark_white-subtract_turboflakes_.svg'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVel() {
  return Math.random() * 2 - 1;
}


function contrast(hue) {
  let h = hue + getRandomInt(90, 180)
  if (h > 360) {
    return h - 360
  }
  return h
}

function gradient() {
  const hue = getRandomInt(0, 360);
  return {
    start: hsla(hue),
    end: hsla(contrast(hue))
  }
}

function hsla(hue) {
  return 'hsla(' + hue + ', ' + getRandomInt(50, 100) + '%, ' +
  getRandomInt(50, 80) + '%, 1)'; 
}

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || 
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

class IndexPage extends Component {

  state = {
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 800,
    height: 600,
    balls: []
  }

  componentDidMount() {
    this.init()
  }

  componentDidUpdate(prevProps) {
    
  }

  componentWillUnmount() {
    if (this.req) {
      cancelAnimationFrame(this.req);
    }
  }

  init = () => {
    if (this.req) {
      cancelAnimationFrame(this.req);
    }
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      let balls = []
      
      for (let i = 0; i < 1; i++) {
        const g = gradient()
        const ball = {
          radius: 30,
          x: canvas.width / 2,
          y: canvas.height / 2,
          velX: getRandomVel(),
          colorStart: g.start,
          colorEnd: g.end
        }
        balls.push(ball);
      }

      this.setState({ ctx, balls })
      
    }
    this.req = window.requestAnimationFrame(this.update)
  }



  update = () => {

    

    const { ctx, width, height, balls } = this.state

    // clear the canvas and redraw everything
    ctx.clearRect(0, 0, width, height)
    
    this.draw()

    this.req = requestAnimationFrame(this.update)

    

  }

  logo = () => {
    const { ctx } = this.state
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    const p = new Path2D("M420.94,219.22a78.42,78.42,0,1,0,78.42,78.42A78.42,78.42,0,0,0,420.94,219.22ZM396.48,340.43a13.17,13.17,0,1,1,13.17-13.17A13.175,13.175,0,0,1,396.48,340.43Zm30.58-29.62c-7.27,0-37.64-13.17-37.64-13.17s30.37-13.17,37.64-13.17a13.17,13.17,0,0,1,0,26.34Zm18.35-29.63c-7.27,0-49.88-13.17-49.88-13.17s42.6-13.17,49.88-13.17a13.17,13.17,0,1,1,0,26.34Z")
    ctx.fill(p);
  }

  path1 = () => {
    const { ctx } = this.state
    // ctx.save();
    ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    const p = new Path2D('M442.28,252.93a7.471,7.471,0,0,1-7.47,7.47c-4.13,0-28.27-7.47-28.27-7.47s24.15-7.47,28.27-7.47A7.477,7.477,0,0,1,442.28,252.93Z');
    ctx.fill(p);
    ctx.stroke(p);
    
    ctx.translate(2.5, 0);
    ctx.save();
  }
  
  path2 = ()  => {
    const { ctx } = this.state
    // ctx.save();
    ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    var p = new Path2D('M431.88,269.72a7.471,7.471,0,0,1-7.47,7.47c-4.12,0-21.34-7.47-21.34-7.47s17.21-7.47,21.34-7.47A7.477,7.477,0,0,1,431.88,269.72Z');
    ctx.fill(p);
    ctx.stroke(p);
    ctx.translate(5.5, 0);  
    // ctx.restore();
    ctx.save();
  }

  draw = ()  => {
    const { ctx, width, height } = this.state
    
    ctx.save();
    
    // Define gradient
    let g = ctx.createLinearGradient(0, 0, width, height);
    // const color = gradient()
    // g.addColorStop(0, color.start);
    // g.addColorStop(1, color.end);
    // ctx.fillStyle = g;
    ctx.fillStyle = 'rgba(200, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    this.logo()
    // ctx.fillStyle = 'rgba(230, 120, 0, 1)';
    // ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    // ctx.save();
    // ctx.translate(150, 150);

    // Path 1
    // var time = new Date();
    // ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    // const p1 = new Path2D('M442.28,252.93a7.471,7.471,0,0,1-7.47,7.47c-4.13,0-28.27-7.47-28.27-7.47s24.15-7.47,28.27-7.47A7.477,7.477,0,0,1,442.28,252.93Z');
    // ctx.fill(p1);
    // ctx.rotate(-2)
    // ctx.translate(105, 0);
    
    // ctx.restore();


    // path 1
    // ctx.save();
    // ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    // const p1 = new Path2D('M442.28,252.93a7.471,7.471,0,0,1-7.47,7.47c-4.13,0-28.27-7.47-28.27-7.47s24.15-7.47,28.27-7.47A7.477,7.477,0,0,1,442.28,252.93Z');
    // console.log("__p1", p1);
    // ctx.fill(p1);
    // ctx.stroke(p1);
    // p1.moveTo(Math.PI / 30, 0)
    // ctx.rotate(Math.PI / 30);
    // ctx.translate(2.5, 0);
    // ctx.restore();




    // path 2
    // ctx.save();
    // ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';
    // const p2 = new Path2D('M431.88,269.72a7.471,7.471,0,0,1-7.47,7.47c-4.12,0-21.34-7.47-21.34-7.47s17.21-7.47,21.34-7.47A7.477,7.477,0,0,1,431.88,269.72Z');
    // ctx.fill(p2);
    // ctx.stroke(p2);
    // ctx.translate(5.5, 0);  
    // ctx.restore();
    

    // ctx.restore();
  }
  
  render() {
    const { width, height } = this.state

    return (
      <div>
        <canvas id="canvas" width={width} height={height}></canvas>
      </div>
    )
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IndexPage;
