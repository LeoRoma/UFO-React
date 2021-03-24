function TheEye(ctx) {
 
    function createCircles(){
        ctx.beginPath(); // outer circle
        ctx.lineWidth = 2;
        ctx.arc(400, 200, 150, 0, Math.PI * 2)
      
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath(); // inner circle
        ctx.arc(400, 200, 140, 0, Math.PI * 2)
        ctx.stroke();
        ctx.closePath();
    }

    function segmentFromTopToRight() {
        ctx.beginPath(); //center top
        ctx.moveTo(400, 200);
        ctx.lineTo(400, 50);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(465, 62);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(515, 105);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(545, 160);
        ctx.stroke();
        ctx.closePath();
    }

    function segmentFromRightToBottom() {
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(550, 200);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(540, 250);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(510, 300);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(460, 339);
        ctx.stroke();
        ctx.closePath();
    }

    function segmentFromBottomToLeft() {
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(400, 350);
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(340, 339);
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(290, 300);
        ctx.stroke();
        ctx.closePath();
    
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(260, 250);
        ctx.stroke();
        ctx.closePath();
    }

    function segmentFromLeftToTop() {
        ctx.beginPath(); //center left
        ctx.moveTo(400, 200);
        ctx.lineTo(250, 200);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.moveTo(400, 200);
        ctx.lineTo(258, 150);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(285, 105);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(340, 61);
        ctx.stroke();
        ctx.closePath();
    }

    function createCabins(){
        ctx.beginPath(); // cabins from top to right
        ctx.arc(400, 40, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(470, 55, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(524, 100, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(555, 155, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); // cabins from right to bottom
        ctx.arc(560, 200, 10, 0, Math.PI * 2)
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(550, 255, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(519, 308, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(465, 346, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); // cabins from bottom to left
        ctx.arc(400, 360, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(335, 345, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(285, 309, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(250, 255, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();


        ctx.beginPath(); // cabins from left to top
        ctx.arc(240, 200, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(248, 148, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath(); 
        ctx.arc(275, 98, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath(); 
        ctx.arc(335, 55, 10, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }   

    function createFerrys(){
        segmentFromTopToRight()
        segmentFromRightToBottom();
        segmentFromBottomToLeft();
        segmentFromLeftToTop()
        createCircles();
        createCabins()
    }

    createFerrys()
}
export default TheEye;