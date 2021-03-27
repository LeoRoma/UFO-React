function Stars(ctx) {

      function fillCircle(ctx, x, y, r, fillStyle) {
            ctx.beginPath();
            ctx.fillStyle = fillStyle;
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
      }

      fillCircle(ctx, 100, 150, 1, `rgba(255, 255, 255, ${0.5}`);
      fillCircle(ctx, 200, 70, 1.5, `rgba(255, 255, 255, ${0.4}`);
      fillCircle(ctx, 300, 150, 1, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 390, 80, 1.5, `rgba(255, 255, 255, ${0.3}`);
      fillCircle(ctx, 420, 30, 1, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 430, 50, 1.5, `rgba(255, 255, 255, ${0.5}`);
      fillCircle(ctx, 440, 85, 1, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 470, 95, 1.5, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 520, 120, 1, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 600, 50, 1.5, `rgba(255, 255, 255, ${0.7}`);
      fillCircle(ctx, 610, 100, 1, `rgba(255, 255, 255, ${1}`);
      fillCircle(ctx, 660, 30, 1.5, `rgba(255, 255, 255, ${0.3}`);
}


export default Stars;