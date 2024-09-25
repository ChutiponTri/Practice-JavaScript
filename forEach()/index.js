// forEach() = method used to iterate over the elements of an array and apply a specified function (callback) for each element
//             array.forEach(callback)

// Declare Variables
let numbers = [1, 2, 3, 4, 5];

// Delcare Functions
function display(element){
    console.log(element);
}
function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

// For Each Callback Method
numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(display);

// Redeclare Variables
let fruits = ["apple", "orange", "banana", "coconut"];

// Redeclare Functions
function upper_case(element, index, array){
    array[index] = element.toUpperCase();
}
function lower_case(element, index, array){
    array[index] = element.toLowerCase();
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

// For Each Callback Method
fruits.forEach(capitalize);
fruits.forEach(display);

