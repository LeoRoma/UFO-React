import React, {Component} from 'react';
import Canvas from './Canvas';
class Animations extends Component{
    constructor(props){
        super(props);
        this.state = {moveX : 0};
        this.move = this.move.bind(this);
    }

    componentDidMount(){
        requestAnimationFrame(this.move);
    }

    move(){
        const moveX = this.state.moveX + 2;
        this.setState({moveX});
        // console.log(this.state.moveX)
        requestAnimationFrame(this.move)
    }
    render(){
        return <Canvas rotation={this.state.moveX} />
    }
}

export default Animations;