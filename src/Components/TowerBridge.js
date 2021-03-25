function TowerBridge(ctx) {
    function createBridge(ctx, x, y, width, height) {
        ctx.fillStyle = "#f9a602";
        ctx.fillRect(x, y, width, height);
    }

    function createBuilding(ctx) {
        ctx.fillStyle = "#eb9605";
        ctx.fillRect(335, 200, 130, 200); // middle building
        ctx.fillRect(120, 250, 80, 150); // left building
        ctx.fillRect(575, 250, 80, 150); // right building
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
        createWindows(ctx, 139, 265, 10, 4, 20);
        createWindows(ctx, 139, 305, 10, 4, 20);
        createWindows(ctx, 139, 335, 10, 4, 20);
        createWindows(ctx, 139, 375, 10, 4, 20);

        // building in the middle
        createWindows(ctx, 368, 220, 15, 6, 30);
        createWindows(ctx, 368, 270, 15, 6, 30);
        createWindows(ctx, 368, 310, 15, 6, 30);
        createWindows(ctx, 368, 360, 15, 6, 30);

        // right building
        createWindows(ctx, 594, 265, 10, 4, 20);
        createWindows(ctx, 594, 305, 10, 4, 20);
        createWindows(ctx, 594, 335, 10, 4, 20);
        createWindows(ctx, 594, 375, 10, 4, 20);
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
        createVerticalLine(ctx, 128, 250, 128, 400, 1);
        createVerticalLine(ctx, 191, 250, 191, 400, 1);
        // buidling in the middle
        createVerticalLine(ctx, 347, 200, 347, 400, 2);
        createVerticalLine(ctx, 452, 200, 452, 400, 2);
        // right building
        createVerticalLine(ctx, 583, 250, 583, 400, 1);
        createVerticalLine(ctx, 646, 250, 646, 400, 1);
    }

    function createHorizontalLines(ctx) {
        // left building
        createHorizontalLine(ctx, 120, 292, 200, 292, 1); // top lines
        createHorizontalLine(ctx, 120, 298, 200, 298, 1);

        createHorizontalLine(ctx, 120, 362, 200, 362, 1); // bottom lines
        createHorizontalLine(ctx, 120, 368, 200, 368, 1);

        // buidling in the middle

        createHorizontalLine(ctx, 335, 257, 466, 257, 2); // top lines
        createHorizontalLine(ctx, 335, 264, 466, 264, 2);

        createHorizontalLine(ctx, 335, 348, 466, 348, 2); // bottom lines
        createHorizontalLine(ctx, 335, 355, 466, 355, 2);


        // right building
        createHorizontalLine(ctx, 575, 292, 655, 292, 1); // top lines
        createHorizontalLine(ctx, 575, 298, 655, 298, 1);

        createHorizontalLine(ctx, 575, 362, 655, 362, 1); // bottom lines
        createHorizontalLine(ctx, 575, 368, 655, 368, 1);
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
        createTriangle(ctx, 160, 220, 120, 250, 200, 250);
        createSquare(ctx, 120, 230, 10, 20); // left side
        createTip(ctx, 124, 220, 2, 10); // left tip
        createSquare(ctx, 190, 230, 10, 20); // right side
        createTip(ctx, 194, 220, 2, 10); // right tip 
        createSquare(ctx, 152, 210, 15, 15); // top 
        createSquare(ctx, 154.5, 200, 10, 10);
        createTip(ctx, 159, 190, 2, 10) // top tip

        // building in the middle
        createTriangle(ctx, 400, 150, 335, 200, 465, 200);
        createSquare(ctx, 335, 180, 15, 20); // left side
        createTip(ctx, 342, 165, 3, 15); // left tip
        createSquare(ctx, 450, 180, 15, 20); // right side
        createTip(ctx, 456, 165, 3, 15); // right tip 
        createSquare(ctx, 387, 134, 25, 25); // top 
        createSquare(ctx, 391, 117, 17, 17);
        createTip(ctx, 398, 100, 4, 20) // top tip

        // right in the middle
        createTriangle(ctx, 615, 220, 575, 250, 655, 250);
        createSquare(ctx, 575, 230, 10, 20); // left side
        createTip(ctx, 579, 220, 2, 10); // left tip
        createSquare(ctx, 645, 230, 10, 20); // right side
        createTip(ctx, 649, 220, 2, 10); // right tip 
        createSquare(ctx, 607, 210, 15, 15); // top 
        createSquare(ctx, 609.5, 200, 10, 10);
        createTip(ctx, 613.5, 190, 2, 10) // top tip
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
        let moveX = 220;
        let moveY = 310;
        let ropesNumber = 6; 
        for(let i = 0; i< ropesNumber; i++){
            createBridgeHolder(ctx, moveX, moveY, moveX, 380, 2);
            moveX += 20;
            moveY -= 10;
        }
    }

    function createBridgeHoldersTwo(ctx){
        let moveX = 485;
        let moveY = 360;
        let ropesNumber = 6; 
        for(let i = 0; i< ropesNumber; i++){
            createBridgeHolder(ctx, moveX, moveY, moveX, 380, 2);
            moveX += 15;
            moveY -= 6.5;
        }
    }
    createBridgeHolder(ctx, 198, 320, 337, 258, 10); // rope between left and middle building

    createBridgeHolder(ctx, 458, 270, 587, 320, 30); // between middle and right building
    createBridgeHolder(ctx, 458, 370, 587, 320, 3);


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