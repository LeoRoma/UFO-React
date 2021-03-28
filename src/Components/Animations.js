import React, { Component } from 'react';

import Canvas from './Canvas';

class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 800,
            height: 450,
            ufoYAxis: -40,
            shootingStarX: -70,
            shootingStarY: 300,
            tankX: 830,
            ufoOneX: - 50,
            ufoTwoX: 850
        }
        this.moveUFOs = this.moveUFOs.bind(this);
        this.moveUFOOneX = this.moveUFOOneX.bind(this);
        this.moveUFOTwoX = this.moveUFOTwoX.bind(this);
        this.moveUFOY = this.moveUFOY.bind(this);
        this.moveShootingStar = this.moveShootingStar.bind(this);
        this.moveTank = this.moveTank.bind(this);
    }

    componentDidMount() {
        this.moveUFOs();
        // this.moveUFOOneX()
        // this.moveUFOTwoX();
        // this.moveUFOY();
        // this.moveShootingStar();

    }

    moveUFOs(){
        if(this.state.ufoOneX > 800){
            this.moveUFOTwoX();
            this.moveShootingStar();
        } 
        if(this.state.ufoTwoX < 0){
            this.moveUFOY();
        }
        this.moveUFOOneX();
        requestAnimationFrame(this.moveUFOs);
    }

    moveUFOOneX() {
        const ufoOneX = this.state.ufoOneX + 3
        this.setState({ ufoOneX });
        // requestAnimationFrame(this.moveUFOOneX);
    }

    moveUFOTwoX() {
        const ufoTwoX = this.state.ufoTwoX - 3
        this.setState({ ufoTwoX });
        // requestAnimationFrame(this.moveUFOTwoX);
    }

    moveUFOY() {
        if (this.state.ufoYAxis > 390) {
            const ufoYAxis = this.state.ufoYAxis - 1;
            this.setState({ ufoYAxis });
            this.moveTank();
        }
        const ufoYAxis = this.state.ufoYAxis + 1;
        this.setState({ ufoYAxis });
        // requestAnimationFrame(this.moveUFOY);
    }

    moveShootingStar() {
        const shootingStarX = this.state.shootingStarX + 5.5;
        const shootingStarY = this.state.shootingStarY - 3.5;
        this.setState({ shootingStarX, shootingStarY });
        // requestAnimationFrame(this.moveShootingStar);
    }

    moveTank() {
        if (this.state.tankX < 550) {
            const tankX = this.state.tankX + 2;
            this.setState({ tankX });
        }
        const tankX = this.state.tankX - 2;
        this.setState({ tankX });
        // requestAnimationFrame(this.moveTank)
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.moveUFOs);
        // cancelAnimationFrame(this.moveUFOOneX);
        // cancelAnimationFrame(this.moveUFOTwoX);
        // cancelAnimationFrame(this.moveUFOY);
        // cancelAnimationFrame(this.moveShootingStar);
        // cancelAnimationFrame(this.moveTank);
    }

    render() {

        return <Canvas
            ufoYAxis={this.state.ufoYAxis}
            width={this.state.width}
            height={this.state.height}
            shootingStarX={this.state.shootingStarX}
            shootingStarY={this.state.shootingStarY}
            tankX={this.state.tankX}
            ufoOneX={this.state.ufoOneX}
            ufoTwoX={this.state.ufoTwoX}
        />
    }
}

export default Animations;