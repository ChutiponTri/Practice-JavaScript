// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// ------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a, b);

// ------- EXAMPLE 2 ---------
// SWAP THE ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ------- EXAMPLE 3 ---------
// ASSIGN AN ELEMENTS TO VARIABLES
const [first_col, second_col, third_col, ...extra_col] = colors;

console.log(first_col, second_col, third_col, extra_col);

// ------- EXAMPLE 4 ---------
// EXTRACTS VALUES FROM OBJECTS
const person1 = {
    first_name: "Spongebob",
    last_name: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    first_name: "Patrick",
    last_name: "Star",
    age: 34,
}

const {first_name, last_name, age , job="Unemployed"} = person2;
console.log(first_name, last_name, age, job);

// ------- EXAMPLE 5 ---------
// DESTRUCTURE IN FUNCTION PARAMETERS
function display_person({first_name, last_name, age, job="Unemplyed"}){
    console.log(`name: ${first_name} ${last_name}`);
    console.log(`age: ${age}`);
    console.log(`Job: ${job}`)
}

display_person(person1);
display_person(person2);
