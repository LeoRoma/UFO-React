function Cloud1(ctx) {

    ctx.beginPath();

    ctx.arc(100, 70, 10, 3.15, Math.PI * 2); 
    ctx.arc(120, 70, 15, 3.15, Math.PI * 2);
    ctx.arc(140, 70, 20, 3.15, Math.PI * 2);
    ctx.arc(160, 70, 15, 3.15, Math.PI * 2); 
    ctx.arc(180, 70, 10, 3.15, Math.PI * 2);

    ctx.fillStyle = "lightblue"
    ctx.fill();
}

export default Cloud1;