function TheEye(ctx) {
    const segmentCount = 10
    let r = 150;
    let degrees = Math.PI * 2 / segmentCount;


    ctx.beginPath(); // outer circle
    ctx.arc(400, 200, 150, 0, Math.PI * 2)
    ctx.stroke();

    ctx.beginPath(); // inner circle
    ctx.arc(400, 200, 140, 0, Math.PI * 2)
    ctx.stroke();

    ctx.beginPath(); // center right
    ctx.moveTo(400, 200);
    ctx.lineTo(550, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(540, 250);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(510, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(460, 339);
    ctx.stroke();

    ctx.beginPath(); // center bottom
    ctx.moveTo(400, 200);
    ctx.lineTo(400, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(340, 339);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(290, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(460, 339);
    ctx.stroke();

    ctx.beginPath(); //center left
    ctx.moveTo(400, 200);
    ctx.lineTo(250, 200);
    ctx.stroke();

    ctx.beginPath(); //center top
    ctx.moveTo(400, 200);
    ctx.lineTo(400, 50);
    ctx.stroke();
}
export default TheEye;