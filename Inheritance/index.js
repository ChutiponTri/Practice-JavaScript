// inheritance = allows a new class to inherit properties and methods from existing class (parent -> child)
//               helps code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    drink(){
        console.log(`This ${this.name} is drinking`);
    }
}


class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.drink();
rabbit.run();

fish.eat();
fish.drink();
fish.swim();

hawk.eat();
hawk.drink();
hawk.fly();