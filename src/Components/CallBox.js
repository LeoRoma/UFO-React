function CallBox(ctx) {
    const baseX = 17;
    function createSection(ctx, x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function createSections(ctx){
        createSection(ctx, baseX + 10, 380, 90, 20, "black"); //base
        createSection(ctx, baseX + 20, 260, 70, 120, "red"); // cabin
        
        createSection(ctx, baseX + 20, 250, 70, 15, "#cc0000"); // holder
        createSection(ctx, baseX + 30, 254, 50, 6, "yellow"); // sign

        createSection(ctx, baseX + 30, 270, 50, 105, "#cc0000"); // cabin door
        createSection(ctx, baseX + 35, 365, 40, 7, "red");
    }

    function createTopSection(ctx, y, size, color){
        ctx.beginPath();
        ctx.arc(baseX + 55, y, size, 3.40, Math.PI * 1.92);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

    function createDoorGlass(ctx, x, y, width, height){
        const glassNumber = 4;
        for(let i = 0; i < glassNumber; i++){
            ctx.fillStyle = "#000033";
            ctx.fillRect(baseX + x, y, width, height);
            x += 10;
        }
    }

    function createDoorKnob(ctx){
        ctx.beginPath();
        ctx.arc(baseX + 32, 318, 2, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }

    function createDoor(ctx){
        createDoorGlass(ctx, 36, 276, 8, 19);
        createDoorGlass(ctx, 36, 298, 8, 19);
        createDoorGlass(ctx, 36, 320, 8, 19);
        createDoorGlass(ctx, 36, 342, 8, 19);
        createDoorKnob(ctx);
    }
    
    function createCallBox(ctx){
        createTopSection(ctx, 260, 38, "red");
        createTopSection(ctx, 252, 25, "#cc0000");
    
        createSections(ctx);

        createDoor(ctx);
    }
 
    createCallBox(ctx)
}
export default CallBox;