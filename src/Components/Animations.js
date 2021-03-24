import React, { Component } from 'react';

import Canvas from './Canvas';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 450,
            ufoYAxis: 100,
        }
        this.ufoMoveY = this.ufoMoveY.bind(this);
    }

    componentDidMount() {
        this.ufoMoveY();
    }

    ufoMoveY() {
        if (this.state.ufoYAxis > 380) {
            const ufoYAxis = this.state.ufoYAxis - 1;
            this.setState({ ufoYAxis })
        }
        const ufoYAxis = this.state.ufoYAxis + 1;
        this.setState({ ufoYAxis })
        requestAnimationFrame(this.ufoMoveY);
        console.log(this.state.ufoYAxis);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.ufoMoveY);
    }

    render() {

        return <Canvas
            ufoYAxis={this.state.ufoYAxis}
            width={this.state.width}
            height={this.state.height}
        />
    }
}

export default Animations;