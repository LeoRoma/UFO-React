function UFOTwo(ctx, ufoTwoX){
    const baseY = 140;

    function createUFOWindShield(ctx, ufoTwoX) {
        ctx.beginPath();
        ctx.arc(ufoTwoX, baseY, 30, 3.15, Math.PI * 2);  // yAxis = 100
        ctx.fillStyle = "#98bfcc";
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFODisc(ctx) {
        ctx.beginPath();
        ctx.ellipse(ufoTwoX, baseY + 5, 12, 50, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 110
        ctx.fillStyle = "#7e7e7e"
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOBottom(ctx) {
        ctx.beginPath();
        ctx.ellipse(ufoTwoX, baseY + 13, 6, 18, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 130
        ctx.fillStyle = "#c4c400"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLights(ctx, ufoTwoX, yAxis) {
        ctx.beginPath();
        ctx.arc(ufoTwoX, yAxis, 2, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLightReflex(ctx, ufoTwoX) {
        ctx.beginPath();
        ctx.ellipse(ufoTwoX + 15, baseY - 17, 2, 8, Math.PI / -5, 0, 2 * Math.PI) // yAxis = 70
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFO(ctx, ufoTwoX) {
        createUFOWindShield(ctx, ufoTwoX);
        createUFODisc(ctx, ufoTwoX);
        createUFOBottom(ctx, ufoTwoX);

        createUFOLightReflex(ctx, ufoTwoX);

        createUFOLights(ctx, ufoTwoX - 23, baseY + 5);  // yAxis = 110
        createUFOLights(ctx, ufoTwoX - 10, baseY + 3); // yAxis = 103
        createUFOLights(ctx, ufoTwoX + 10, baseY + 3);// yAxis = 103
        createUFOLights(ctx, ufoTwoX + 23, baseY + 5);// yAxis = 110
    }

    createUFO(ctx, ufoTwoX);
}

export default UFOTwo;