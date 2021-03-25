function BigBen(ctx) {
    ctx.fillStyle = "#eb9605";
    ctx.fillRect(660, 250, 80, 150); // base
    ctx.fillRect(656, 160, 90, 90); // clock height
   
    // after clock 1st section
    ctx.fillStyle = "black";
    ctx.fillRect(656, 160, 90, 3);
    ctx.fillStyle = "#eb9605";
    ctx.fillRect(660, 140, 80, 20);
   

    ctx.beginPath();
    ctx.moveTo(700, 100);
    ctx.lineTo(660, 140);
    ctx.lineTo(740, 140);
    ctx.fillStyle = "black";
    ctx.fill()
    ctx.closePath();

    ctx.fillStyle = "#eb9605";
    ctx.fillRect(680, 95, 40, 25);

    ctx.beginPath();
    ctx.moveTo(700, 60);
    ctx.lineTo(680, 95);
    ctx.lineTo(720, 95);
    ctx.fillStyle = "black";
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(700, 30);
    ctx.lineTo(700, 65)
    ctx.stroke();

    function createClock(ctx) {

        ctx.fillStyle = "black";
        ctx.fillRect(665, 170, 70, 70);

        ctx.beginPath();
        ctx.arc(700, 205, 33, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(700, 205, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke()
        ctx.closePath();

        // ctx.beginPath();
        // ctx.moveTo(700, 205);
        // ctx.lineTo(700, 180)
        // ctx.stroke();
    }

    function createClockTick(ctx, moveX, moveY, lineX, lineY){
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY)
        ctx.stroke();
    }

 
    createClock(ctx);
    function createClockHours(ctx){
        createClockTick(ctx, 700, 170, 700, 180); // 12
        createClockTick(ctx, 720, 175, 712, 184); // 1 
        createClockTick(ctx, 730, 188, 722, 193); // 2 


        createClockTick(ctx, 725, 205, 735, 205); // 3
        createClockTick(ctx, 730, 223, 722, 219); // 4 
        createClockTick(ctx, 717, 235, 712, 228); // 5 

        createClockTick(ctx, 700, 230, 700, 240); // 6
        createClockTick(ctx, 682, 235, 689, 226); // 7
        createClockTick(ctx, 670, 223, 679, 216); // 8

        createClockTick(ctx, 665, 205, 675, 205); // 9

        createClockTick(ctx, 670, 188, 677, 193); // 10
        createClockTick(ctx, 682, 175, 687, 183); // 11
       
    }
    createClockHours(ctx)
}

export default BigBen;