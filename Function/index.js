// function = A section of reusable code
//            Declare code once, use it whenever you want
//            Call the function to execute that code

// Delcare Functions
function HappyBirthday(name, age){
    console.log(`Happy Birthday to ${name}`);
    console.log(`Happy Birthday to ${name}`);
    console.log(`Happy Birthday dear ${name}`);
    console.log(`Happy Birthday to ${name}`);
    console.log(`You are ${age} years old`);
}

// Js
function add(x, y){
    let result = x + y;
    return result;
}

function subtract(x, y){
    return x - y;
}

function is_even(num){
    return num % 2 === 0 ? true : false;
}

function is_valid_email(email){
    return email.includes("@") ? true : false;
}

// Execute Functions
HappyBirthday("Ton", 22);

let answer = add(2, 3);
console.log(answer);

console.log(subtract(4, 3));

console.log(is_even(13));

console.log(is_valid_email("ton/server@"))

