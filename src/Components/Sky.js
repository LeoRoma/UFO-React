function Sky(ctx, stars) {
    ctx.fillStyle = "#0ed2f7";
    ctx.fillRect(0, 0, 800, 450);

    for (let i = 0; i < stars.length; i++) {
        // let factor = counter * i
        const x = stars[i].x;
        const y = stars[i].y;
        const r = 1;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default Sky;