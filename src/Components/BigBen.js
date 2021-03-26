function BigBen(ctx) {

    function createRoof(ctx, moveX, moveY, lineOneX, lineOneY, lineTwoX, lineTwoY){
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineOneX, lineOneY);
        ctx.lineTo(lineTwoX, lineTwoY);
        ctx.fillStyle = "black";
        ctx.fill()
        ctx.closePath();
    }

    function createSection(ctx, x, y, width, height, color){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function createBigBenSections(ctx){

        ctx.beginPath(); //tip
        ctx.moveTo(700, 15);
        ctx.lineTo(700, 40)
        ctx.stroke();

        createRoof(ctx, 700, 100, 660, 140, 740, 140); // larger roof
        createRoof(ctx, 700, 35, 680, 95, 720, 95); // end roof

        createSection(ctx, 660, 250, 80, 150, "#eb9605"); // base
        createSection(ctx, 656, 160, 90, 90, "#eb9605"); // clock frame

        createSection(ctx, 656, 160, 90, 3, "black"); // after clock
        createSection(ctx, 660, 140, 80, 20, "#eb9605");
        createSection(ctx, 680, 95, 40, 25, "#eb9605"); //smaller section
    }

    function createClockFrame(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(665, 170, 70, 70);

        ctx.beginPath(); // outer circle
        ctx.arc(700, 205, 33, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); // inner circle
        ctx.arc(700, 205, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke()
        ctx.closePath();

    }

    function createClockTick(ctx, moveX, moveY, lineX, lineY){
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY)
        ctx.stroke();
    }

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

        createClockTick(ctx, 700, 200, 700, 223); // hours pointer
        createClockTick(ctx, 695, 210, 716, 189); // minutes pointer
    }

    function createBigBenDetail(ctx, x, y, width, height, numberOfDetail, spacing){
        for(let i = 0; i < numberOfDetail; i++){
            ctx.fillStyle = "#292929";
            ctx.fillRect(x, y, width, height);
            x += spacing;
        }
    }

    function createHorizontaLine(ctx, moveX, moveY, lineX, lineY){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY);
        ctx.strokeStyle = "#292929";
        ctx.stroke();
        ctx.closePath();
    }
    function createBigBenDetails(ctx){  
        createBigBenDetail(ctx, 668, 350, 5, 25, 6, 12); // base
        createBigBenDetail(ctx, 668, 310, 5, 25, 6, 12); // 2nd
        createBigBenDetail(ctx, 668, 270, 5, 25, 6, 12); // 3rd
        createBigBenDetail(ctx, 660, 250, 4, 10, 12, 7); // clock's under
        createBigBenDetail(ctx, 660, 145, 4, 15, 12, 7); // clock's top
        createBigBenDetail(ctx, 684, 110, 4, 10, 5, 7); // clock's roof

        createHorizontaLine(ctx, 660, 385, 740, 385); // bottom line
        createHorizontaLine(ctx, 660, 375, 740, 375); 

        createHorizontaLine(ctx, 660, 335, 740, 335); // mid line
        createHorizontaLine(ctx, 660, 345, 740, 345); 

        createHorizontaLine(ctx, 660, 295, 740, 295); // mid line
        createHorizontaLine(ctx, 660, 305, 740, 305);
    }    

    createBigBenSections(ctx)
    createClockFrame(ctx);
    createClockHours(ctx);
   
    createBigBenDetails(ctx)
    
}

export default BigBen;