function Street(ctx, width) {
    // ctx.beginPath();

    function createLines(ctx, width) {
        ctx.fillStyle = "white"
        for (let i = 0; i <= width; i += 60) {
            ctx.fillRect(i, 412, 40, 3)
        }
    }


    function createStreet(ctx, width) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 400, 800, 200);
        createLines(ctx, width)
    }

    createStreet(ctx, width)
}

export default Street;