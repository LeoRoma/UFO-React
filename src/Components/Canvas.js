import React, { useRef, useEffect } from 'react';

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 450;
        const stars = createStars(canvas.width, canvas.height, 50)
        createSky(ctx, stars);
        createUfo(ctx);
    })

    const createUfo = (ctx) => {

        // ufo top
        ctx.beginPath();
        ctx.arc(400, 100, 50, 3.15, Math.PI * 2);
        ctx.fillStyle = "blue"
        ctx.fill();
        ctx.stroke();


        // ufo disc
        ctx.beginPath();
        ctx.ellipse(400, 110, 20, 85, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "grey"
        ctx.fill();
        ctx.stroke();

        // ufo bottom

        ctx.beginPath();
        ctx.ellipse(400, 130, 10, 30, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow"
        ctx.fill();
        ctx.stroke();

        // ufo lights

        ctx.beginPath();
        ctx.arc(340, 110, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(380, 103, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(420, 103, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(460, 110, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();

        // ufo light reflex
        ctx.beginPath();
        ctx.ellipse(425, 70, 4, 15, Math.PI / -5, 0, 2 * Math.PI)
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }


 


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