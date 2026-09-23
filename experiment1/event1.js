const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log("Hello " + name);
});

myEmitter.on("exit", () => {
    console.log("Exiting the program...");
});

myEmitter.emit("greet", "Jaykishan");
myEmitter.emit("exit");