import React, { Component } from 'react';

class Animations extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.greeting = this.greeting.bind(this);
    }

    componentDidMount(){
        // this.greeting();
    }

    greeting(){
        requestAnimationFrame(this.greeting);
        console.log("hello");
    }
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}

export default Animations;