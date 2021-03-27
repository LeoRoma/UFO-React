import React, { useRef, useEffect } from 'react';

import TheEye2 from './TheEye2';

import BigBen from './BigBen';
import CallBox from './CallBox';
import Clouds from './Clouds';
import Moon from './Moon';
import ShootingStar from './ShootingStar';
import Sky from './Sky';
import Stars from './Stars';
import Street from './Street';
import Tank from './Tank';
import TheEye from './TheEye';
import TowerBridge from './TowerBridge';
import UFO from './UFO';


function Canvas(animationsInfo) {
    const canvasRef = useRef(null);
    const { ufoYAxis, width, height, shootingStarX, shootingStarY, tankX } = animationsInfo;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        if(window.innerWidth <= 800){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        ctx.clearRect(0, 0, width, height);

        Sky(ctx);
        Stars(ctx);
        Moon(ctx);
        Clouds(ctx);
        TheEye2(ctx);
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