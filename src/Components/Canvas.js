import React, { useRef, useEffect, useState } from 'react';
import UFO from './UFO';
import Sky from './Sky';
import Stars from './Stars';

function Canvas() {
    const canvasRef = useRef(null);
    const [width] = useState(800);
    const [height] = useState(450);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        const stars = Stars(width, height, 50)
        console.log(stars)
        // createSky(ctx, stars);
        Sky(ctx, stars);
        UFO(ctx)
       
        // createUfo(ctx);
    })

    

 


    // function getOpacity(factor) {
    //     const opacityIncrement =
    //         (this.state.maxStarOpacity - this.state.minStarOpacity) * Math.abs(Math.sin(factor));
    //     const opacity = this.state.minStarOpacity + opacityIncrement;
    //     return opacity;
    // }



  

    // function createStars(width, height, spacing) {
    //     const stars = [];

    //     for (let x = 0; x < width; x += spacing) {
    //         for (let y = 0; y < height; y += spacing) {
    //             const star = {
    //                 x: x + randomInt(spacing),
    //                 y: y + randomInt(spacing)
    //             };
    //             stars.push(star);
    //         }
    //     }
    //     return stars;
    // }

    function createSky(context, stars) {
        let counter = 0
        context.fillStyle = "#030318";
        context.fillRect(0, 0, 800, 450);

        for (let i = 0; i < stars.length; i++) {
            let factor = counter * i
            const x = stars[i].x;
            const y = stars[i].y;
            const r = 1;
            context.beginPath();
            context.fillStyle = "white";
            context.arc(x, y, r, 0, Math.PI * 2);
            context.fill();
        }

    }

    return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas