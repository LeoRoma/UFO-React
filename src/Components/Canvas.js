import React, { useRef, useEffect} from 'react';

import BigBen from './BigBen';
import CallBox from './CallBox';
import Clouds from './Clouds';
import Moon from './Moon';
import Sky from './Sky';
// import Stars from './Stars';

import TheEye from './TheEye';
import Street from './Street';
import TowerBridge from './TowerBridge';
import UFO from './UFO';
import ShootingStar from './ShootingStar';
import Tank from './Tank';



function Canvas(animationsInfo) {
    const canvasRef = useRef(null);
    const {ufoYAxis, width, height, shootingStarX, shootingStarY, tankX} = animationsInfo

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);
        
        // const stars = Stars(width, height);

        Sky(ctx);
     
        Moon(ctx);
        Clouds(ctx);
        TheEye(ctx);
        BigBen(ctx);
        TowerBridge(ctx);
      
        Street(ctx, width);
        CallBox(ctx);
        UFO(ctx, ufoYAxis);
        ShootingStar(ctx, shootingStarX, shootingStarY);
        Tank(ctx, tankX)
        ctx.restore();
    })

    return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas