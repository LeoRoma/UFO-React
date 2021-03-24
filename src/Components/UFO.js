function UFO(ctx, yAxis){

    function createUFOWindShield(ctx, yAxis){
        ctx.beginPath();
        ctx.arc(400, yAxis, 50, 3.15, Math.PI * 2);  // yAxis = 100
        ctx.fillStyle = "lightblue";
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFODisc(ctx){
        ctx.beginPath();
        ctx.ellipse(400, yAxis + 10, 20, 85, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 110
        ctx.fillStyle = "grey"
        ctx.fill();
        ctx.strokeFill = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOBottom(ctx){
        ctx.beginPath();
        ctx.ellipse(400, yAxis + 30, 10, 30, Math.PI / 2, 0, 2 * Math.PI); // yAxis = 130
        ctx.fillStyle = "yellow"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLights(ctx, xAxis, yAxis){
        ctx.beginPath();
        ctx.arc(xAxis, yAxis, 5, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createUFOLightReflex(ctx){
        ctx.beginPath();
        ctx.ellipse(425, yAxis - 30, 4, 15, Math.PI / -5, 0, 2 * Math.PI) // yAxis = 70
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    
    function createUFO(ctx, yAxis){
        createUFOWindShield(ctx, yAxis);
        createUFODisc(ctx, yAxis);
        createUFOBottom(ctx, yAxis);
      
        createUFOLightReflex(ctx, yAxis);

        createUFOLights(ctx, 340, yAxis + 10);  // yAxis = 110
        createUFOLights(ctx, 380, yAxis + 3); // yAxis = 103
        createUFOLights(ctx, 420, yAxis + 3);// yAxis = 103
        createUFOLights(ctx, 460, yAxis + 10);// yAxis = 110
    }
 
    createUFO(ctx, yAxis);
}

export default UFO;
