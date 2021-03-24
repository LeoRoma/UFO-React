import React, { useRef, useEffect} from 'react';
import UFO from './UFO';
import Sky from './Sky';
import Stars from './Stars';
import Clouds from './Clouds';
import TheEye from './TheEye';
import Street from './Street'
import TowerBridge from './TowerBridge'

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
        Clouds(ctx);
        TheEye(ctx);
        TowerBridge(ctx);
       
        Street(ctx, width);
        UFO(ctx, ufoYAxis);
       
        

        ctx.restore();
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