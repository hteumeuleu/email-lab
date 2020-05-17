var x = 0;
var xStep = 360 / 16 * -1;
setInterval(function() {
	x += xStep;
	gameViewer.setRotation(15, x);
}, 500);