const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orage", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

fruits.push({name: "grapes", color: "purple", calories: 62});
fruits.pop();

console.log(fruits);
console.log(fruits[4]);
console.log(fruits[4].calories);

// forEach
fruits.forEach(fruit => console.log(fruit.color));

// map
const fruitName = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
console.log(fruitName);
console.log(fruitColor);

// filter()
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCalFruits);

// reduce()
const maxFruits = fruits.reduce( (prev, next) => next.calories > prev.calories ? next : prev );
const minFruits = fruits.reduce( (prev, next) => next.calories < prev.calories ? next : prev );
console.log(maxFruits);
console.log(minFruits);