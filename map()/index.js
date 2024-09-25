// map = accepts a callback and applies that function to each element of an array, then return a new array

// Declare Variables
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

// Delcare Variables
function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}

// Show Result
console.log(numbers);
console.log(squares);
console.log(cubes);


// Redeclare Variables
const students = ["spongebob", "patrick", "squidward", "sandy"];
const students_upper = students.map(upper_case);

// Redeclare Functions
function upper_case(element){
    return element.toUpperCase();
}

// Show
console.log(students);
console.log(students_upper);

// Redeclare Variables
const dates = ["2024-10-1", "2025-2-20", "2026-3-30"];
const formated_dates = dates.map(format_dates);

// Redeclare Functions
function format_dates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// Show
console.log(dates);
console.log(formated_dates);