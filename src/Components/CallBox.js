function CallBox(ctx) {
    const baseX = 17;
    function createSection(ctx, x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    createSection(ctx, baseX + 10, 380, 90, 20, "black"); //base
    createSection(ctx, baseX + 20, 260, 70, 120, "red"); // cabin
    createSection(ctx, baseX + 30, 270, 50, 105, "#cc0000"); // cabin door
    createSection(ctx, baseX + 20, 250, 70, 15, "#cc0000"); // holder
    createSection(ctx, baseX + 30, 254, 50, 6, "yellow"); // sign

    ctx.beginPath();
    ctx.arc(baseX + 55, 260, 38, 3.40, Math.PI * 1.92);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(baseX + 55, 252, 25, 3.40, Math.PI * 1.92);
    ctx.fillStyle = "#cc0000";
    ctx.fill();
    ctx.closePath();

}
export default CallBox;