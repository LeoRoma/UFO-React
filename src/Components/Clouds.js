function Clouds(ctx) {

   function cloudOne(ctx){
        ctx.beginPath();
        ctx.arc(100, 90, 15, 3.15, Math.PI * 2); 
        ctx.arc(120, 90, 20, 3.15, Math.PI * 2);
        ctx.arc(140, 90, 25, 3.15, Math.PI * 2);
        ctx.arc(160, 90, 20, 3.15, Math.PI * 2); 
        ctx.arc(180, 90, 15, 3.15, Math.PI * 2);
        ctx.fillStyle = "lightblue"
        ctx.fill();
    }

    function cloudTwo(ctx){
        ctx.beginPath();
        ctx.arc(600, 70, 10, 3.15, Math.PI * 2); 
        ctx.arc(620, 70, 15, 3.15, Math.PI * 2);
        ctx.arc(640, 70, 20, 3.15, Math.PI * 2);
        ctx.arc(660, 70, 15, 3.15, Math.PI * 2); 
        ctx.arc(680, 70, 10, 3.15, Math.PI * 2);
        ctx.fillStyle = "lightblue"
        ctx.fill();
    }

    function cloudThree(ctx){
        ctx.beginPath();
        ctx.arc(500, 160, 5, 3.15, Math.PI * 2); 
        ctx.arc(510, 160, 10, 3.15, Math.PI * 2);
        ctx.arc(530, 160, 15, 3.15, Math.PI * 2);
        ctx.arc(550, 160, 10, 3.15, Math.PI * 2); 
        ctx.arc(560, 160, 5, 3.15, Math.PI * 2);
        ctx.fillStyle = "lightblue"
        ctx.fill();
    }

    function createClouds(ctx){
        cloudOne(ctx);
        cloudTwo(ctx);
        cloudThree(ctx)
    }

    createClouds(ctx)
}

export default Clouds;