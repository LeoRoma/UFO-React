import React, { useRef, useEffect, useState } from 'react';
import UFO from './UFO';
import Sky from './Sky';
import Stars from './Stars';

function Canvas() {
    const canvasRef = useRef(null);
    const [width] = useState(800);
    const [height] = useState(450);
    const [yAxis, setYAxis] = useState(100)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);

        const stars = Stars(width, height, 100)
        Sky(ctx, stars);

   
        // UFO(ctx, yAxis);
  

        UFO(ctx, yAxis);
        ctx.restore();
  
        let animatedFrame
        const moveY = () => {
           
            setYAxis(yAxis + 0.01);
    
            if (yAxis > 450) {
                setYAxis(yAxis - 0.01);
            }
            animatedFrame = window.requestAnimationFrame(moveY);
            console.log(yAxis)
        }
          moveY();
      
        return () => {
            window.cancelAnimationFrame(animatedFrame)
        }
    })




    // function getOpacity(factor) {
    //     const opacityIncrement =
    //         (this.state.maxStarOpacity - this.state.minStarOpacity) * Math.abs(Math.sin(factor));
    //     const opacity = this.state.minStarOpacity + opacityIncrement;
    //     return opacity;
    // }

    return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas