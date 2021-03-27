function ShootingStar(ctx, shootingStarX, shootingStarY) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(shootingStarX, shootingStarY);
    ctx.lineTo(shootingStarX + 60, shootingStarY - 50);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    // ctx.fillStyle = fillStyle;
    ctx.arc(shootingStarX + 60, shootingStarY - 50, 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

}
export default ShootingStar;