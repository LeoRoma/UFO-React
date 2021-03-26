import React, { Component } from 'react';

import Canvas from './Canvas';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 450,
            ufoYAxis: 100,
            shootingStarX: -100,
            shootingStarY: 200
        }
        this.ufoMoveY = this.ufoMoveY.bind(this);
        this.shootingStarMove = this.shootingStarMove.bind(this);
    }

    componentDidMount() {
        this.ufoMoveY();
        this.shootingStarMove();
    }

    ufoMoveY() {
        if (this.state.ufoYAxis > 390) {
            const ufoYAxis = this.state.ufoYAxis - 2;
            this.setState({ ufoYAxis });
        }
        const ufoYAxis = this.state.ufoYAxis + 2;
        this.setState({ ufoYAxis });
        requestAnimationFrame(this.ufoMoveY);
        console.log(this.state.ufoYAxis);
    }

    shootingStarMove() {
        const shootingStarX = this.state.shootingStarX + 2.5;
        const shootingStarY = this.state.shootingStarY - 0.5;
        this.setState({ shootingStarX, shootingStarY });
        requestAnimationFrame(this.shootingStarMove);
    }
    componentWillUnmount() {
        cancelAnimationFrame(this.ufoMoveY);
        cancelAnimationFrame(this.shootingStarMove);
    }

    render() {

        return <Canvas
            ufoYAxis={this.state.ufoYAxis}
            width={this.state.width}
            height={this.state.height}
            shootingStarX={this.state.shootingStarX}
            shootingStarY={this.state.shootingStarY}
        />
    }
}

export default Animations;