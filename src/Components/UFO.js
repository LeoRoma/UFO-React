function UFO(ctx){

    function createUFOWindShield(ctx){
        ctx.beginPath();
        ctx.arc(400, 100, 50, 3.15, Math.PI * 2);
        ctx.fillStyle = "lightblue"
        ctx.fill();
        ctx.stroke();
    }

    function createUFODisc(ctx){
        ctx.beginPath();
        ctx.ellipse(400, 110, 20, 85, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "grey"
        ctx.fill();
        ctx.stroke();
    }

    function createUFOBottom(ctx){
        ctx.beginPath();
        ctx.ellipse(400, 130, 10, 30, Math.PI / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow"
        ctx.fill();
        ctx.stroke();
    }

    function createUFOLights(ctx, xAxis, yAxis){
        ctx.beginPath();
        ctx.arc(xAxis, yAxis, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }

    function createUFOLightReflex(ctx){
        ctx.beginPath();
        ctx.ellipse(425, 70, 4, 15, Math.PI / -5, 0, 2 * Math.PI)
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }
    
    function createUFO(ctx){
        createUFOWindShield(ctx);
        createUFODisc(ctx);
        createUFOBottom(ctx);
      
        createUFOLightReflex(ctx);

        createUFOLights(ctx, 340, 110);
        createUFOLights(ctx, 380, 103);
        createUFOLights(ctx, 420, 103);
        createUFOLights(ctx, 460, 110);
    }
 
    createUFO(ctx);
}

export default UFO;
