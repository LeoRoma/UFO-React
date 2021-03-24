function TheEye(ctx){
    ctx.beginPath();
    ctx.arc(400, 240, 150, 0, Math.PI * 2);
    ctx.arc(400, 240, 130, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

}

export default TheEye;