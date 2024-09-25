// object = A collection of related properties and/or methods can represent real world object (people, products, places)
//          object = {key : value,
//                   function()}

const person1 = {
    first_name: "Spongebob",
    last_name: "Squarepants",
    age: 30,
    is_employed: true,
    say_hello: function() {console.log("Hi, I'm Spongebob")},
    eat: function() {console.log("Hi, I'm eating Something")},
}

const person2 = {
    first_name: "Patrick",
    last_name: "Star",
    age: 42,
    is_employed: false,
    say_hello: () => {console.log("Hi, I'm Patrick")},
    eat: () => {console.log("Hi, I'm drinking")},
}

console.log(person1.first_name);
console.log(person1.last_name);
console.log(person1.age);
console.log(person1.is_employed);
console.log(person2.first_name);
console.log(person2.last_name);
console.log(person2.age);
console.log(person2.is_employed);

person1.say_hello();
person1.eat();
person2.say_hello();
person2.eat();