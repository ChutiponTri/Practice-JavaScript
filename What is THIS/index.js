// this = reference to object where THIS is used (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Spongebob",
    fav_food: "hamburgers",
    say_hello: function() {console.log(`Hi I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.fav_food}`)},
}

const person2 = {
    name: "Patrick",
    fav_food: "Pizza",
    say_hello: function() {console.log(`Hi I am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating ${this.fav_food}`)},
}

person1.say_hello();
person1.eat();
person2.say_hello();
person2.eat();