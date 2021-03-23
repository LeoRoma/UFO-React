import React, { useRef, useEffect } from 'react';
import UFO from './UFO';

function Canvas() {
    const canvasRef = useRef(null);
    // state

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 450;
        const stars = createStars(canvas.width, canvas.height, 50)
        createSky(ctx, stars);
        UFO(ctx)
        // createUfo(ctx);
    })

    

 


    // function getOpacity(factor) {
    //     const opacityIncrement =
    //         (this.state.maxStarOpacity - this.state.minStarOpacity) * Math.abs(Math.sin(factor));
    //     const opacity = this.state.minStarOpacity + opacityIncrement;
    //     return opacity;
    // }



    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function createStars(width, height, spacing) {
        const stars = [];

        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                const star = {
                    x: x + randomInt(spacing),
                    y: y + randomInt(spacing)
                };
                stars.push(star);
            }
        }
        return stars;
    }

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