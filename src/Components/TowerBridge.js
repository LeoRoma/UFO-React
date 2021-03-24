function TowerBridge(ctx){
    ctx.fillStyle = "#ffbf00";
    ctx.fillRect(335, 200, 130, 200); // center building
    ctx.fillRect(120, 250, 80, 150); // left building
    ctx.fillRect(575, 250, 80, 150); // right building

    function createWindows(ctx, x, y, windowsDistance, width, height){
        let windowsNumber = 5;
        ctx.fillStyle = "#2e2d2d";
        for(let i = 0; i < windowsNumber; i++){
            ctx.fillRect(x, y, width, height);
            x += windowsDistance;
            console.log(x)
        }
    }

    createWindows(ctx, 140, 265, 10, 4, 20); // left building
    createWindows(ctx, 140, 305, 10, 4, 20);
    createWindows(ctx, 140, 335, 10, 4, 20);
    createWindows(ctx, 140, 375, 10, 4, 20);

    createWindows(ctx, 370, 220, 15, 6, 30);// center building
    createWindows(ctx, 370, 270, 15, 6, 30);
    createWindows(ctx, 370, 310, 15, 6, 30);
    createWindows(ctx, 370, 360, 15, 6, 30);


    createWindows(ctx, 595, 265, 10, 4, 20); // right building
    createWindows(ctx, 595, 305, 10, 4, 20);
    createWindows(ctx, 595, 335, 10, 4, 20);
    createWindows(ctx, 595, 375, 10, 4, 20);
   
    ctx.beginPath(); // left building roof
    ctx.moveTo(160, 220);
    ctx.lineTo(120, 250);
    ctx.lineTo(200, 250);
    ctx.fillStyle = "black"
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.fillRect(120, 230, 10, 20);
    ctx.fillRect(190, 230, 10, 20);

    ctx.beginPath(); // right building roof
    ctx.moveTo(615, 220);
    ctx.lineTo(575, 250);
    ctx.lineTo(655, 250);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.fillRect(575, 230, 10, 20);
    ctx.fillRect(645, 230, 10, 20);

    ctx.beginPath(); // center building roof
    ctx.moveTo(400, 150);
    ctx.lineTo(335, 200);
    ctx.lineTo(465, 200);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.fillRect(335, 180, 15, 20);
    ctx.fillRect(450, 180, 15, 20);
}

export default TowerBridge;