import React, { Component } from 'react';

class CanvasComponent extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        canvas.width = 800;
        canvas.height = 450;

        const context = canvas.getContext('2d');
        // To give color to a rectangle
        context.fillStyle = "blue";
        //  creates a rectangle
        context.fillRect(100, 100, 100, 100);
        //to draw lines
        context.beginPath();
        context.moveTo(50, 300);
        context.lineTo(300, 100);
        context.lineTo(400, 300);
        // to give color to lines
        context.strokeStyle = "red";
        context.stroke();

        // Arc or Circle
        context.beginPath();
        context.arc(300, 300, 50, 0, Math.PI, true);
        context.strokeStyle = "green"
        context.stroke();
    }

    render() {
        return (
            <div>
                <canvas id="canvas" ref={this.canvasRef} />
            </div>
        )
    }
}

export default CanvasComponent;