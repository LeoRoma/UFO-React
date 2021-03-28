function UFOOne(ctx, ufoOneX) {

    const baseY = 80;

    function createUFOWindShield(ctx, ufoOneX) {
        ctx.beginPath();
        ctx.arc(ufoOneX, baseY, 15, 3.15, Math.PI * 2);  // yAxis = 100
        ctx.fillStyle = "#5f777f";
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFODisc(ctx) {
        ctx.beginPath();
        ctx.ellipse(ufoOneX, baseY + 5, 6, 25, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 110
        ctx.fillStyle = "#3f3f3f"
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOBottom(ctx) {
        ctx.beginPath();
        ctx.ellipse(ufoOneX, baseY + 10, 3, 9, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 130
        ctx.fillStyle = "#898900"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLights(ctx, ufoOneX, yAxis) {
        ctx.beginPath();
        ctx.arc(ufoOneX, yAxis, 1, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLightReflex(ctx, ufoOneX) {
        ctx.beginPath();
        ctx.ellipse(ufoOneX + 8, baseY - 9, 1, 4, Math.PI / -5, 0, 2 * Math.PI) // yAxis = 70
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFO(ctx, ufoOneX) {
        createUFOWindShield(ctx, ufoOneX);
        createUFODisc(ctx, ufoOneX);
        createUFOBottom(ctx, ufoOneX);

        createUFOLightReflex(ctx, ufoOneX);

        createUFOLights(ctx, ufoOneX - 12, baseY + 5);  // yAxis = 110
        createUFOLights(ctx, ufoOneX - 5, baseY + 3); // yAxis = 103
        createUFOLights(ctx, ufoOneX + 5, baseY + 3);// yAxis = 103
        createUFOLights(ctx, ufoOneX + 12, baseY + 5);// yAxis = 110
    }

    createUFO(ctx, ufoOneX);
}

export default UFOOne;