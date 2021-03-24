import React, { useRef, useEffect} from 'react';
import UFO from './UFO';
import Sky from './Sky';
import Stars from './Stars';
import Cloud1 from './Cloud1';


function Canvas(animationsInfo) {
    const canvasRef = useRef(null);
    const {ufoYAxis, width, height} = animationsInfo

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);

        const stars = Stars(width, height, 100)
        Sky(ctx, stars);
        
     
        UFO(ctx, ufoYAxis);
        Cloud1(ctx);
        

        ctx.restore();

        // let animatedFrame
        // const moveY = () => {

        //     setYAxis(yAxis + 0.1);
        //     // UFO(ctx, yAxis);
        //     if (yAxis > 450) {
        //         setYAxis(yAxis - 0.01);
        //     }
        //     animatedFrame = requestAnimationFrame(moveY);
        //     console.log(yAxis)
        // }
        // moveY();

        // return () => {
        //     cancelAnimationFrame(animatedFrame)
        // }
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