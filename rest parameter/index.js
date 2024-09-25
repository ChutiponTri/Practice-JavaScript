// Rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//                   spread = expands an array into seperate elements
//                   rest = bundless seperate elements into an array

// Delcare Variables
const food1 = "pizza";
const food2 = "ham";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "burrito";

// Declare Functions
function open_fridge(...foods){
    console.log(foods);
}

function get_food(...foods){
    return foods;
}

function sum(...numbers){
    let result = 0;
    for (number of numbers){
        result += number;
    }
    return result;
}

function average(...numbers){
    let result = 0;
    for (number of numbers){
        result += number;
    }
    return result / numbers.length;
}

function combine_string(...str){
    return str.join(" ");
}


// Execute Functions
open_fridge(food1, food2, food3, food4, food5);

const foods = get_food(food1, food2, food3, food4, food5);
console.log(foods);

const total = sum(1, 2, 4, 6, 7, 5, 3, 1);
console.log(`Your total is $${total}`);

const avrg = average(2, 3, 45, 56, 67);
console.log(`Your average is $${avrg}`);

const FullName = combine_string("Chutipon", "Trirattananurak");
console.log(FullName);



