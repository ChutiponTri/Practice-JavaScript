// Ternary operator = a shortcut to if{} and else{} help to asssign a variable based on 
//                     condition ? codeIfTrue : codeIfFalse

// Declare Variables
let age = 21;
let message = (age >= 18 ? "You are 18+" : "You are not 18+");
console.log(message);

let time = 16;
let greeting = (time < 12 ? "Good Morning" : "Good Afternoon");
console.log(greeting);

let is_student = true;
let stat = (is_student ? "You are a student" : "You are not a student");
console.log(stat);

let purchase = 125;
let discount = (purchase > 100 ? 10 : 0);
console.log(`Your total's $${purchase - (purchase * discount / 100)}`);
