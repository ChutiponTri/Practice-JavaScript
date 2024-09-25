// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`${this.name} move at a speed of ${speed} mph`)
    }
}


class Rabbit extends Animal{
    constructor(name, age, run_speed){
        super(name, age);
        this.run_speed = run_speed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.run_speed);
    }
}

class Fish extends Animal{
    constructor(name, age, swim_speed){
        super(name, age);
        this.swim_speed = swim_speed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swim_speed);
    }
}

class Hawk extends Animal{
    constructor(name, age, fly_speed){
        super(name, age);
        this.fly_speed = fly_speed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.fly_speed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("Fish", 2, 3);
const hawk = new Hawk("hawk", 3, 33);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.run_speed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swim_speed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.fly_speed);
hawk.fly();