import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.paint = this.initCanvas.bind(this);
    }

    componentDidUpdate() {
        this.initCanvas();
    }

    initCanvas() {
        const { rotation } = this.props;
        const canvas = this.refs.canvas;
        canvas.width = 800;
        canvas.height = 450;
        const context = this.refs.canvas.getContext("2d");
        context.clearRect(0, 0, 800, 450)
        // console.log(rotation)
        // context.save();
        // context.translate(100, 100);
        // context.rotate(rotation, 100, 100);
        // context.fillStyle = "#F00";
        // context.fillRect(-50, -50, 100, 100);
        context.restore();
        this.createUfo(context, rotation);
    }

    createUfo(context, rotation) {
        // context.rotate(rotation, 100, 100);
        // ufo top
        context.beginPath();
        context.arc(rotation, 100, 50, 3.15, Math.PI * 2);
        context.fillStyle = "blue"
        context.fill();
        context.stroke();
        

        // ufo disc
        context.beginPath();
        context.ellipse(rotation, 110, 20, 85, Math.PI / 2, 0, 2 * Math.PI);
        context.fillStyle = "grey"
        context.fill();
        context.stroke();

        // ufo bottom

        context.beginPath();
        context.ellipse(rotation, 130, 10, 30, Math.PI / 2, 0, 2 * Math.PI);
        context.fillStyle = "yellow"
        context.fill();
        context.stroke();

        // ufo lights

        context.beginPath();
        context.arc(rotation - 40, 110, 5, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(rotation -10, 103, 5, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(rotation + 20, 103, 5, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        context.beginPath();
        context.arc(rotation + 50, 110, 5, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.stroke();

        // ufo light reflex
        context.beginPath();
        context.ellipse(rotation + 25, 70, 4, 15, Math.PI / -5, 0, 2 * Math.PI)
        context.fillStyle = "white";
        context.fill();
        context.stroke();
    }

    render() {
        return <canvas id="canvas" ref="canvas" />
    }
}

export default Canvas