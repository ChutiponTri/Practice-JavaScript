let first_name = "Supapan";         // Sring
let age = 25;                       // Number
let price = 10.99;
let gpa = 2.1;
let bool = true;                    // Boolean

console.log(typeof price);
console.log(typeof first_name);
console.log(typeof bool);

console.log(`Your name is ${first_name}`);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);
console.log(`Status is ${bool}`);

document.getElementById("p1").textContent = `Your name's ${first_name}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Your Status ${bool}`;
