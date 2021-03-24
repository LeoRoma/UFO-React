function TowerBridge(ctx){
    ctx.fillStyle = "brown";
    ctx.fillRect(325, 200, 150, 200);
    ctx.fillRect(120, 250, 100, 150);
    ctx.fillRect(575, 250, 100, 150);


    function createWindows(ctx, x, y){
        // let x = x;
        let windowsNumber = 5;
        let windowsDistance = 10;
        ctx.fillStyle = "black";
        for(let i = 0; i < windowsNumber; i++){
            ctx.fillRect(x, y, 5, 20);
            x += windowsDistance;
            console.log(x)
        }
    }
    createWindows(ctx, 150, 265);
    createWindows(ctx, 150, 305);
    createWindows(ctx, 150, 335);
    createWindows(ctx, 150, 375);

    createWindows(ctx, 605, 265); // right building
    createWindows(ctx, 605, 305);
    createWindows(ctx, 605, 335);
    createWindows(ctx, 605, 375);
    // ctx.fillStyle = "black";
    // ctx.fillRect(605, 275, 5, 20);
    // ctx.fillRect(615, 275, 5, 20);
    // ctx.fillRect(625, 275, 5, 20);
    // ctx.fillRect(635, 275, 5, 20);
    // ctx.fillRect(645, 275, 5, 20);
}

export default TowerBridge;