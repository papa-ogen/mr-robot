var robot = require("robotjs");

var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 - 10;
var width = screenSize.width;

setInterval(function () {
  var { x, y } = robot.getMousePos();
  robot.moveMouse(x, y + 1);
}, 1000 * 60);
