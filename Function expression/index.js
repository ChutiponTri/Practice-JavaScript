// Function Declaration = define a reusable block of code that performs a specific task
function hello1(){
    console.log("Hello");
}

// Function Expression = a way to define functions as values or variables
const hello2 = function(){
    console.log("Hello");
}

// Settimeout
setTimeout(hello2, 3000);
setTimeout(function(){
    console.log("Hello");
}, 3000);

// Declare Variables
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
const even_num = numbers.filter(function(element){
    return element % 2 === 0;
})
const total = numbers.reduce(function(prev, next){
    return prev + next;
})

console.log(squares);
console.log(cubes);
console.log(even_num);
console.log(total);
