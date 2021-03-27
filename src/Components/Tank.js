function Tank(ctx, tankX) {
    let gradient = ctx.createLinearGradient(0, 160, 0, 170);
    gradient.addColorStop(0, "#5a3f37");
    gradient.addColorStop(1, "#2c7744");

    function createRect(ctx, tankX, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.fillRect(tankX, y, width, height);
        ctx.strokeRect(tankX, y, width, height);
    }

    createRect(ctx, tankX, 390, 100, 20, "#2c7744"); //body
    createRect(ctx, tankX + 45, 365, 30, 20, "green"); //entrance

    function createTrapezium(ctx, moveX, moveY, lineOneX, lineOneY, lineTwoX, lineTwoY, lineThreeX, lineThreeY, color) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineOneX, lineOneY);
        ctx.lineTo(lineTwoX, lineTwoY);
        ctx.lineTo(lineThreeX, lineThreeY);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    // createTrapezium(ctx, moveX, moveY, lineOneX, lineOneY, lineTwoX, lineTwoY, lineThreeX, lineThreeY, color)
    createTrapezium(ctx, tankX, 410, tankX + 20, 430, tankX + 80, 430, tankX + 100, 410, "black"); //crawler
    createTrapezium(ctx, tankX + 10, 415, tankX + 20, 425, tankX + 80, 425, tankX + 90, 415, "#4c4c4c"); //crawler
    createTrapezium(ctx, tankX + 10, 390, tankX + 20, 380, tankX + 80, 380, tankX + 90, 390, "#2c7744"); //upperbody
    createTrapezium(ctx, tankX + 45, 375, tankX - 20, 365, tankX - 15, 355, tankX + 45, 370, "#2c7744"); //cannon

    function createWheels(ctx, tankX){
        const wheelsNumber = 6;
        for(let i = 0; i < wheelsNumber; i++){
            ctx.beginPath();
            ctx.arc(tankX + 22, 420, 5, 0, Math.PI * 2);
            ctx.fillStyle = "grey";
            ctx.fill();
            ctx.stroke();
            ctx.closePath(); 
            tankX += 11;
        }

    }

    ctx.beginPath();
    ctx.ellipse(tankX - 15, 360, 4, 6, Math.PI / 5, 0, 2 * Math.PI) // yAxis = 70
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    createWheels(ctx, tankX)
}

export default Tank;