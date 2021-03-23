// import React, { Component } from 'react';
// import Canvas from './Canvas';
// class Animations extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             moveX: 0,
//             isMoveLeftToRight: true
//         };
//         this.move = this.move.bind(this);
//     }

//     componentDidMount() {
//         this.move()
//     }

//     move() {
//         if (this.state.moveX > 800) {

//             this.setState({
//                 isMoveLeftToRight: false
//             });
//         } else if (this.state.moveX < 0) {
//             this.setState({
//                 isMoveLeftToRight: true
//             });
//         }
//         if (this.state.isMoveLeftToRight === false) {
//             const moveX = this.state.moveX - 10;
//             this.setState({
//                 moveX
//             });
//         }
//         const moveX = this.state.moveX + 4;
//         this.setState({ moveX });
//         console.log(this.state.moveX)
//         requestAnimationFrame(this.move)
//     }
//     render() {
//         return <Canvas moveX={this.state.moveX} />
//     }
// }

// export default Animations;







// randomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// createStars(width, height, spacing) {
//     const stars = [];

//     for (let x = 0; x < width; x += spacing) {
//         for (let y = 0; y < height; y += spacing) {
//             const star = {
//                 x: x + this.randomInt(spacing),
//                 y: y + this.randomInt(spacing)
//             };
//             stars.push(star);
//         }
//     }
//     return stars;
// }


// getOpacity(factor) {
//     const opacityIncrement =
//         (this.state.maxStarOpacity - this.state.minStarOpacity) * Math.abs(Math.sin(factor));
//     const opacity = this.state.minStarOpacity + opacityIncrement;
//     return opacity;
// }

// createSky(context, stars) {
//     let counter = 0
//     context.fillStyle = "#030318";
//     context.fillRect(0, 0, 800, 450);

//     for(let i = 0; i < stars.length; i++){
//         let factor = counter * i
//         const x = stars[i].x;
//         const y = stars[i].y;
//         const r = 1;
//         context.beginPath();
//         context.fillStyle = "white";
//         context.arc(x, y, r, 0, Math.PI * 2);
//         context.fill();
//     }
 
// }


// randomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// createStars(width, height, spacing) {
//     const stars = [];

//     for (let x = 0; x < width; x += spacing) {
//         for (let y = 0; y < height; y += spacing) {
//             const star = {
//                 x: x + this.randomInt(spacing),
//                 y: y + this.randomInt(spacing)
//             };
//             stars.push(star);
//         }
//     }
//     return stars;
// }


