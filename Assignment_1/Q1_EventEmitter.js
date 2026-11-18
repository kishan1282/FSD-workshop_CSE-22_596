const EventEmitter = require('events');

const schoolBell = new EventEmitter();

// Creating events
schoolBell.on('classStart', () => {
    console.log("Class Started!");
});

schoolBell.on('classEnd', () => {
    console.log("Class Ended!");
});

// Triggering events
schoolBell.emit('classStart');
schoolBell.emit('classEnd');

// Event Loop demonstration
console.log("School Bell System Started");

setTimeout(() => {
    console.log("setTimeout: Ring Bell");
}, 0);

setImmediate(() => {
    console.log("setImmediate: Ring Bell");
});

process.nextTick(() => {
    console.log("nextTick: Ring Bell");
});

console.log("End of Program");