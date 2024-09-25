// sort() = method used to sort elements of an array in place
//          Sorts elments as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + number + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

fruits.sort();
numbers.sort( (a,b) => a - b );     // Descending

console.log(fruits);
console.log(numbers);


const people = [{name: "Spongbob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}
]

people.sort( (a, b) => b.age - a.age );     // Ascending
people.sort( (a, b) => b.name.localeCompare(a.name) );
console.log(people);