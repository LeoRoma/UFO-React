function Sky(ctx) {
    let gradient = ctx.createLinearGradient(0, 0, 0, 170);
    gradient.addColorStop(0, "#2c3e50");
    gradient.addColorStop(1, "#2980b9");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 450);

    // function fillStar(ctx, x, y, r) {
    //     ctx.beginPath();
    //     ctx.fillStyle = "white";
    //     ctx.arc(x, y, r, 0, Math.PI * 2);
    //     ctx.fill();
    // }

    // function fillSky(ctx, stars) {
    //     for (let i = 0; i < stars.length; i++) {
    //         const x = stars[i].x;
    //         const y = stars[i].y;
    //         fillStar(ctx, x, y, stars[i].r);
    //     }
    // }

    // fillSky(ctx, stars);
}

export default Sky;