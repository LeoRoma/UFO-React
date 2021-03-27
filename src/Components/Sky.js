function Sky(ctx, stars) {
    let gradient = ctx.createLinearGradient(0, 0, 0, 170);
    gradient.addColorStop(0, "#2c3e50");
    gradient.addColorStop(1, "#2980b9");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 450);
}

export default Sky;