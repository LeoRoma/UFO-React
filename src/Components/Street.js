function Street(ctx, width) {
    // ctx.beginPath();

    function createLines(ctx, width) {
        ctx.fillStyle = "white"
        for (let i = 0; i <= width; i += 60) {
            ctx.fillRect(i, 415, 40, 3)
        }
    }

    
    function createStreet(ctx, width) {
        ctx.fillStyle = "#191919"
        ctx.fillRect(0, 400, 800, 200);
        createLines(ctx, width)
    }

    createStreet(ctx, width)
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 395, width, 10);
  
}

export default Street;