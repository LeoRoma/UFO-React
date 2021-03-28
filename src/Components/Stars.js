function Stars(ctx) {

      function fillCircle(ctx, x, y, r, fillStyle) {
            ctx.beginPath();
            ctx.fillStyle = fillStyle;
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
      }

      // great bear
      fillCircle(ctx, 280, 30, 1, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 300, 35, 1.5, `rgba(255, 255, 255, ${0.5}`);
      fillCircle(ctx, 310, 45, 1, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 320, 60, 1.5, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 318, 75, 1, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 337, 80, 1.5, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 343, 69, 1, `rgba(255, 255, 255, ${1}`);

      fillCircle(ctx, 100, 150, 1, `rgba(255, 255, 255, ${0.5}`);
      fillCircle(ctx, 200, 70, 1.5, `rgba(255, 255, 255, ${0.4}`);
     


      fillCircle(ctx, 600, 100, 1.5, `rgba(255, 255, 255, ${0.5}`);
      fillCircle(ctx, 650, 120, 1, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 660, 30, 1.5, `rgba(255, 255, 255, ${0.3}`);




}


export default Stars;