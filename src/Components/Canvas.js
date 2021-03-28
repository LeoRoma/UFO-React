import React, { useRef, useEffect } from 'react';

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
import UFOOne from './UFOOne';
import UFOTwo from './UFOTwo';


function Canvas(animationsInfo) {
    const canvasRef = useRef(null);
    const { ufoYAxis, width, height, shootingStarX, shootingStarY, tankX, ufoOneX, ufoTwoX } = animationsInfo;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        ctx.clearRect(0, 0, width, height);

        Sky(ctx);

        Stars(ctx);
        Moon(ctx);
        UFOOne(ctx, ufoOneX);
        UFOTwo(ctx, ufoTwoX);
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

        // const handleResize = e => {
        //     if (window.innerWidth <= 800) {
        //         ctx.canvas.width = window.innerWidth;
        //         ctx.canvas.height = window.innerHeight;
        //         ctx.clearRect(0, 0, width, height);
        //     }
        // };

        // handleResize();
        // window.addEventListener("resize", handleResize);

        // return () => window.removeEventListener("resize", handleResize);
    })

    return <canvas id="canvas" ref={canvasRef} />
}

export default Canvas