var frame = document.getElementById("frame");
var b = document.getElementById("clear");
var e = window.event;
var lastX, lastY;

var drawCircle = function(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "20");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    frame.appendChild(c);
}

var drawLine = function(x, y){
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", lastX);
    l.setAttribute("y1", lastY);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("stroke", "black");
    frame.appendChild(l);
}

var drawNode = function(e){
    var x = e.offsetX, y = e.offsetY;
    drawCircle(x, y);
    if (lastX && lastY) drawLine(x, y);
    lastX = x, lastY = y;
}

var clearFrame = function(e){
    while(frame.childNodes.length > 0) frame.removeChild(frame.childNodes[0]);
    lastX = false, lastY = false;
}

frame.addEventListener("click", drawNode);
b.addEventListener("click", clearFrame);
//frame.appendChild(c);
