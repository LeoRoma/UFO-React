import React, { Component } from 'react';

import Canvas from './Canvas';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 450,
            ufoYAxis: 0,
            shootingStarX: -70,
            shootingStarY: 300,
            tankX: 830
        }
        this.moveUFOY = this.moveUFOY.bind(this);
        this.moveShootingStar = this.moveShootingStar.bind(this);
        this.moveTank = this.moveTank.bind(this);
    }

    componentDidMount() {
        this.moveUFOY();
        this.moveShootingStar();

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

    moveShootingStar() {
        const shootingStarX = this.state.shootingStarX + 7.5;
        const shootingStarY = this.state.shootingStarY - 5.5;
        this.setState({ shootingStarX, shootingStarY });
        requestAnimationFrame(this.moveShootingStar);
    }

    moveTank() {
        if (this.state.tankX < 550) {
            const tankX = this.state.tankX + 0.2;
            this.setState({ tankX });
        }
        const tankX = this.state.tankX - 0.2;
        this.setState({ tankX });
        requestAnimationFrame(this.moveTank)
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.moveUFOY);
        cancelAnimationFrame(this.moveShootingStar);
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