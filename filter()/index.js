// .filter() = creates a new array by filtering out elements

// Declare Variables
let numbers = [1, 2, 3, 4, 5, 6, 7];
let even_nums = numbers.filter(isEven);

// Decalre Functions
function isEven(element){
    return element % 2 === 0;
}

// Logging
console.log(numbers);
console.log(even_nums);

// Declare Variables
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);

// Decalre Functions
function isAdult(element){
    return element >= 18;
}

// Logging
console.log(ages);
console.log(adults);

// Declare Variables
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const short_words = words.filter(getShortWord);

// Decalre Functions
function getShortWord(element){
    return element.length <= 6;
}

// Logging
console.log(words);
console.log(short_words);