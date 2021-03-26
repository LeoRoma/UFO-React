function Moon(ctx) {
    let gradient = ctx.createLinearGradient(0, 0, 0, 170);
    gradient.addColorStop(0, "#2c3e50");
    gradient.addColorStop(1, "#2980b9");
    const backgroundColor = gradient;
    const moon = {
        color: "#fea",
        x: 110,
        y: 80,
        r: 40
      };
    function fillCircle(ctx, x, y, r, fillStyle) {
        ctx.beginPath();
        ctx.fillStyle = fillStyle;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }

    function renderMoon(ctx, blur) {
        fillCircle(ctx, moon.x, moon.y, moon.r, moon.color);
        fillCircle(
            ctx,
            moon.x - moon.r / 3,
            moon.y - moon.r / 3,
            moon.r,
            backgroundColor 
        );
   
    }

    renderMoon(ctx)
}

export default Moon;