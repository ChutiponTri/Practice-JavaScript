// Array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana", "pine", "durian"];

fruits[0] = "coconut"

fruits.push("tomato");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let num_of_fruits = fruits.length;
let index = fruits.indexOf("orange");

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(num_of_fruits);
console.log(index);


for (let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i], i);
}

fruits.sort().reverse();

for (let fruit of fruits){
    console.log(fruit);
}