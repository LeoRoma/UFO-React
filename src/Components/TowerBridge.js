function TowerBridge(ctx) {
    function createBuilding(ctx) {
        ctx.fillStyle = "#eb9605";
        ctx.fillRect(350, 220, 100, 180); // middle building
        ctx.fillRect(140, 260, 70, 140); // left building
        ctx.fillRect(570, 260, 70, 140); // right building
    }

    function createWindows(ctx, x, y, windowsDistance, width, height) {
        let windowsNumber = 5;
        ctx.fillStyle = "#2e2d2d";
        for (let i = 0; i < windowsNumber; i++) {
            ctx.fillRect(x, y, width, height);
            x += windowsDistance;
        }
    }

    function createAllWindows(ctx) {
        // left building
        createWindows(ctx, 153, 267, 10, 4, 20);
        createWindows(ctx, 153, 305, 10, 4, 20);
        createWindows(ctx, 153, 335, 10, 4, 20);
        createWindows(ctx, 153, 375, 10, 4, 20);

        // building in the middle
        createWindows(ctx, 368, 230, 15, 6, 25);
        createWindows(ctx, 368, 280, 15, 6, 25);
        createWindows(ctx, 368, 315, 15, 6, 25);
        createWindows(ctx, 368, 360, 15, 6, 25);

        // right building
        createWindows(ctx, 583, 267, 10, 4, 20);
        createWindows(ctx, 583, 305, 10, 4, 20);
        createWindows(ctx, 583, 335, 10, 4, 20);
        createWindows(ctx, 583, 375, 10, 4, 20);
    }

    function createVerticalLine(ctx, moveX, moveY, lineX, lineY, lineWidth) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function createHorizontalLine(ctx, moveX, moveY, lineX, lineY, lineWidth) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY);
        ctx.stroke();
        ctx.closePath();
    }

    function createVerticalLines(ctx) {
        // left building
        createVerticalLine(ctx, 148, 260, 148, 400, 1);
        createVerticalLine(ctx, 202, 260, 202, 400, 1);
        // buidling in the middle
        createVerticalLine(ctx, 360, 220, 360, 400, 2);
        createVerticalLine(ctx, 440, 220, 440, 400, 2);
        // right building
        createVerticalLine(ctx, 578, 260, 578, 400, 1);
        createVerticalLine(ctx, 632, 260, 632, 400, 1);
    }

    function createHorizontalLines(ctx) {
        // left building
        createHorizontalLine(ctx, 140, 292, 210, 292, 1); // top lines
        createHorizontalLine(ctx, 140, 298, 210, 298, 1);

        createHorizontalLine(ctx, 140, 362, 210, 362, 1); // bottom lines
        createHorizontalLine(ctx, 140, 368, 210, 368, 1);

        // buidling in the middle

        createHorizontalLine(ctx, 350, 262, 450, 262, 2); // top lines
        createHorizontalLine(ctx, 350, 270, 450, 270, 2);

        createHorizontalLine(ctx, 350, 348, 450, 348, 2); // bottom lines
        createHorizontalLine(ctx, 350, 355, 450, 355, 2);


        // right building
        createHorizontalLine(ctx, 570, 292, 640, 292, 1); // top lines
        createHorizontalLine(ctx, 570, 298, 640, 298, 1);

        createHorizontalLine(ctx, 570, 362, 640, 362, 1); // bottom lines
        createHorizontalLine(ctx, 570, 368, 640, 368, 1);
    }

    function createTriangle(ctx, moveX, moveY, lineOneX, lineOneY, lineTwoX, lineTwoY) {
        ctx.beginPath();
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineOneX, lineOneY);
        ctx.lineTo(lineTwoX, lineTwoY);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    function createSquare(ctx, x, y, width, height) {
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, width, height); //right
    }

    function createTip(ctx, x, y, width, height) {
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, width, height)// tip
    }

    function createRoofs(ctx) {
        // left building
        createTriangle(ctx, 175, 240, 140, 260, 210, 260);
        createSquare(ctx, 140, 240, 10, 20); // left side
        createTip(ctx, 144, 230, 2, 10); // left tip
        createSquare(ctx, 200, 240, 10, 20); // right side
        createTip(ctx, 204, 230, 2, 10); // right tip 
        createSquare(ctx, 166, 230, 15, 15); // top 
        createSquare(ctx, 168.5, 220, 10, 10);
        createTip(ctx, 173, 210, 2, 10) // top tip

        // building in the middle
        createTriangle(ctx, 400, 180, 350, 220, 450, 220);
        createSquare(ctx, 350, 200, 15, 20); // left side
        createTip(ctx, 356, 185, 3, 15); // left tip
        createSquare(ctx, 435, 200, 15, 20); // right side
        createTip(ctx, 441, 185, 3, 15); // right tip 
        createSquare(ctx, 387, 164, 25, 25); // top 
        createSquare(ctx, 391, 147, 17, 17);
        createTip(ctx, 398, 130, 4, 20) // top tip

        // right in the middle
        createTriangle(ctx, 605, 240, 570, 260, 640, 260);
        createSquare(ctx, 570, 240, 10, 20); // left side
        createTip(ctx, 574, 230, 2, 10); // left tip
        createSquare(ctx, 630, 240, 10, 20); // right side
        createTip(ctx, 634, 230, 2, 10); // right tip 
        createSquare(ctx, 597, 230, 15, 15); // top 
        createSquare(ctx, 599.5, 220, 10, 10);
        createTip(ctx, 603.5, 210, 2, 10) // top tip
    }

    function createBridge(ctx, x, y, width, height) {
        ctx.fillStyle = "#f9a602";
        ctx.fillRect(x, y, width, height);
    }
    
    function createBridgeHolder(ctx, moveX, moveY, lineX, lineY, lineWidth) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.moveTo(moveX, moveY);
        ctx.lineTo(lineX, lineY);
        ctx.strokeStyle = "#f9a602";
        ctx.stroke();
        ctx.closePath();
    }

    function createBridgeHolders(ctx){
        let moveX = 230;
        let moveY = 310;
        let ropesNumber = 6; 
        for(let i = 0; i< ropesNumber; i++){
            createBridgeHolder(ctx, moveX, moveY, moveX, 380, 2);
            moveX += 20;
            moveY -= 8;
        }
    }

    function createBridgeHoldersTwo(ctx){
        let moveX = 465;
        let moveY = 359;
        let ropesNumber = 6; 
        for(let i = 0; i< ropesNumber; i++){
            createBridgeHolder(ctx, moveX, moveY, moveX, 380, 2);
            moveX += 18;
            moveY -= 6;
        }
    }
    createBridgeHolder(ctx, 198, 320, 355, 265, 10); // rope between left and middle building

    createBridgeHolder(ctx, 440, 275, 587, 320, 30); // between middle and right building
    createBridgeHolder(ctx, 420, 370, 587, 320, 3); // between middle and right building bottom


    createBridge(ctx, 200, 380, 200, 20);
    createBridge(ctx, 420, 380, 200, 20);

    createBridgeHoldersTwo(ctx)
    createBridgeHolders(ctx);
    createBuilding(ctx);
    createVerticalLines(ctx);
    createHorizontalLines(ctx);
    createRoofs(ctx);
    createAllWindows(ctx);
}

export default TowerBridge;