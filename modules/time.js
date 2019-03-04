var colors = require('colors');

var getTime = function(time) {
	var sec = time % 60;
	var min = Math.floor((time % 3600) / 60);
	var hour = Math.floor(time / 3600);
	console.log(('Uptime: ~ %s').green, (hour + 'h ' + min + 'min ' + sec + 'sec ').white);
}

exports.print = getTime;