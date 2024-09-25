// arrow functions = a concise way to write function expressions good for simple functions that you use only once
//                   (parameters) => some code

// Function Declaration
const hello = function(){
    console.log("Hello");
}

// Arrow Function
const hi = (name, age) =>{console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

setTimeout( () => console.log("Hello World") );
hello();
hi("Yoyow", 23);

// Declare Variables
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map( (element) => Math.pow(element, 2) );
const even_num = numbers.filter( (element) => element % 2 === 0 );
const total = numbers.reduce( (prev, next) => prev + next );

// Logging
console.log(squares);
console.log(even_num);
console.log(total);