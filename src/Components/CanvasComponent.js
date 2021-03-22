import React, { Component } from 'react';

class CanvasComponent extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        canvas.width = 800;
        canvas.height= 450;
        const context = canvas.getContext('2d');
        context.fillRect(100, 100, 100, 100);
        context.beginPath();
        context.moveTo(50, 300);
        context.lineTo(300, 100);
        context.lineTo(400, 300)
        context.strokeStyle = "red";
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