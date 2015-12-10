var midi = require('midi');
var input = new midi.input();

// Configure a callback.
input.on('message', function(deltaTime, message) {
    // The message is an array of numbers corresponding to the MIDI bytes:
    //   [status, data1, data2]
    // https://www.cs.cf.ac.uk/Dave/Multimedia/node158.html has some helpful
    // information interpreting the messages.
    console.log('m:' + message + ' d:' + deltaTime);
});

for (var i = 0; i < input.getPortCount(); i++)
{
    console.log(input.getPortName(i));
}

input.openPort(0);

//console.log(input.getPortCount());
//console.log('faku');
