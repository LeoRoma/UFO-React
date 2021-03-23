import React, { Component } from 'react';
import Canvas from './Canvas';
class Animations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moveX: 0,
            isMoveLeftToRight: true
        };
        this.move = this.move.bind(this);
    }

    componentDidMount() {
        this.move()
    }

    move() {
        if (this.state.moveX > 800) {

            this.setState({
                isMoveLeftToRight: false
            });
        } else if (this.state.moveX < 0) {
            this.setState({
                isMoveLeftToRight: true
            });
        }
        if (this.state.isMoveLeftToRight === false) {
            const moveX = this.state.moveX - 10;
            this.setState({
                moveX
            });
        }
        const moveX = this.state.moveX + 4;
        this.setState({ moveX });
        // console.log(this.state.moveX)
        requestAnimationFrame(this.move)
    }
    render() {
        return <Canvas rotation={this.state.moveX} />
    }
}

export default Animations;