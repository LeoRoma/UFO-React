import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.paint = this.paint.bind(this);
    }
  
    componentDidUpdate() {
      this.paint();
    }
  
    paint() {
      const {  rotation } = this.props;
      const context = this.refs.canvas.getContext("2d");
      context.clearRect(0,0, 800, 450)
      console.log(rotation)
      context.save();
      context.translate(100, 100);
      context.rotate(rotation, 100, 100);
      context.fillStyle = "#F00";
      context.fillRect(-50, -50, 100, 100);
      context.restore();
    }
  
    render() {
        return <canvas id="canvas" ref="canvas" />
    }
}

export default Canvas