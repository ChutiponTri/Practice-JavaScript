// .reduce() = reduce the elements of an array to a single value

// Declare Variables
const prices = [14, 12, 54, 56, 49, 52];
const total = prices.reduce(sum);

// Declare Functions
function sum(previous, next){
    return previous + next;
}

// Logging
console.log(`$${total.toFixed(2)}`);

// Declare Variables
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(get_max);

// Declare Functions
function get_max(previous, next){
    return Math.max(previous, next);
}

// Logging
console.log(`$${maximum.toFixed(2)}`);