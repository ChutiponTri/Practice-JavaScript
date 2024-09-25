// Spread operator = ... Allows an iterable such as an array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let Username = "Ton Server";
let letters = [...Username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["Carrots", "Celery", "Potatoes"];

let food = [...fruits, ...vegetables, "eggs", "milk"];

console.log(food);