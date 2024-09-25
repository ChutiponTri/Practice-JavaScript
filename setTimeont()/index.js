// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on the workload of the JavScript runtime env)
//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it trigger


// Ordinary Function
function sayHello(){
    console.log("Hello");
}

sayHello();

// Setting Timeout
const timeoutId = setTimeout(function(){console.log("Yoyow")}, 3000);
clearTimeout(timeoutId);

// Timeout Function
let timeout;

function startTimer(){
    timeout = setTimeout( () => console.log("Hi there"), 2000);
    console.log("Start");
}

function clearTimer(){
    clearTimeout(timeout);
    console.log("Clear");
}

startTimer();
clearTimer();