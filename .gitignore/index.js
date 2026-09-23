console.log("this is the starting point of my code");

setTimeout(() => {
    console.log("this is the first timeout function");
}, 5000);
setTimeout(() => {
    console.log("this is the second timeout function");
}, 2000);
process.nextTick(() => {
    console.log("this is process.nextTick function");
}); 
console.log("this is the end of my code");