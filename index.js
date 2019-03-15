var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
		    	process.exit();
		    	break;
		    case '/version':
		    	console.log(process.versions);
		    	process.exit();
		    	break;
		    case '/info':
		    	console.log(process.env);
		    	process.exit();
		    	break;
		    case '/getOSinfo':		    	
    			OSinfo.print();
				break;
    		default: 
    			process.stderr.write('Wrong instruction!');
		};
		// emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');
    }
});
