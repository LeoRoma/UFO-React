function TheEye(ctx) {
    const centreX = 400;
    const centreY = 200;
    const radius = 150;
    let rotateAngle = 36 * Math.PI / 180;
    let startAngle = 0 * Math.PI / 180;
    let endAngle = 36 * Math.PI / 180;

    function drawWheel() {
        ctx.beginPath(); // cabins from top to right
        ctx.arc(400, 200, 130, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.closePath();

        for (let i = 0; i < 10; i++) {
            // ctx.fillStyle = gradient;  
            ctx.translate(centreX, centreY);
            ctx.rotate(rotateAngle);
            ctx.translate(-centreX, -centreY);
            ctx.beginPath();
            ctx.moveTo(centreX, centreY);
            ctx.lineTo(centreX + radius, centreY);
            ctx.arc(centreX, centreY, radius, startAngle, endAngle, false);
            ctx.closePath();
            ctx.stroke();
        }

    }

    function createCabin(ctx, x, y) {
        ctx.beginPath(); // cabins from top to right
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
    createCabin(ctx, 351, 48); // top left
    createCabin(ctx, 450, 48); // top right
    createCabin(ctx, 529, 106);
    createCabin(ctx, 560, 200);// mid right
    createCabin(ctx, 529, 295);
    createCabin(ctx, 450, 352); // bottom right
    createCabin(ctx, 351, 352);
    createCabin(ctx, 271, 295);
    createCabin(ctx, 240, 200);
    createCabin(ctx, 271, 106);

    drawWheel(ctx);


}
export default TheEye;