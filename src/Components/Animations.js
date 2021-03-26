import React, { Component } from 'react';

import Canvas from './Canvas';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 450,
            ufoYAxis: 0,
            shootingStarX: -100,
            shootingStarY: 200,
            tankX: 820
        }
        this.moveUFOY = this.moveUFOY.bind(this);
        this.shootingStarMove = this.shootingStarMove.bind(this);
        this.moveTank = this.moveTank.bind(this);
    }

    componentDidMount() {
        this.moveUFOY();
        this.shootingStarMove();
        // this.moveTank();
    }

    moveUFOY() {
        if (this.state.ufoYAxis > 390) {
            const ufoYAxis = this.state.ufoYAxis - 2;
            this.setState({ ufoYAxis });
            this.moveTank();
        }
        const ufoYAxis = this.state.ufoYAxis + 2;
        this.setState({ ufoYAxis });
        requestAnimationFrame(this.moveUFOY);

        // console.log(this.state.ufoYAxis);
    }

    shootingStarMove() {
        const shootingStarX = this.state.shootingStarX + 2.5;
        const shootingStarY = this.state.shootingStarY - 0.5;
        this.setState({ shootingStarX, shootingStarY });
        requestAnimationFrame(this.shootingStarMove);
    }

    moveTank() {
        if(this.state.tankX < 500){
            const tankX = this.state.tankX + 0.1;
            this.setState({ tankX });
        }
        const tankX = this.state.tankX - 0.1;
        this.setState({ tankX });
        requestAnimationFrame(this.moveTank)
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.moveUFOY);
        cancelAnimationFrame(this.shootingStarMove);
        cancelAnimationFrame(this.moveTank);
    }

    render() {

        return <Canvas
            ufoYAxis={this.state.ufoYAxis}
            width={this.state.width}
            height={this.state.height}
            shootingStarX={this.state.shootingStarX}
            shootingStarY={this.state.shootingStarY}
            tankX={this.state.tankX}
        />
    }
}

export default Animations;