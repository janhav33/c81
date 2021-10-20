canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "red";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e){
        mouseX = e.clientX - canvas.offsetLeft;
        mouseY = e.clientY - canvas.offsetTop;

        console.log( "x = " + mouseX, "y = " + mouseY)

        circle(mouseX, mouseY);

}
function circle(mouseX, mouseY){
    
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 3;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}


