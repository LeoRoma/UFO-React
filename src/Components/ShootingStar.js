function ShootingStar(ctx, shootingStarX, shootingStarY){
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(shootingStarX, shootingStarY);
    ctx.lineTo(shootingStarX + 50, shootingStarY - 20);
    ctx.stroke();
    ctx.closePath();
}
export default ShootingStar;