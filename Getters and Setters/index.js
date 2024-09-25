// getter = special method that makes a properties readable
// setter = special method that makes a properties writable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(new_width){
        if (new_width > 0){
            this._width = new_width;
        }
        else{
            console.error("Width Must be a Positive Number")
        }
    }

    set height(new_height){
        if (new_height > 0){
            this._height = new_height;
        }
        else{
            console.error("Height Must be a Positive Number")
        }
    }

    get width(){
        return `${this._width} cm`;
    }

    get height(){
        return `${this._height} cm`;
    }

    get area(){
        return `${this._height * this._width} cm^2`;
    }
}

class Name{
    constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    set first_name(new_first_name){
        if (typeof new_first_name === "string" && new_first_name.length > 0){
            this._first_name = new_first_name;
        }
        else{
            console.error("First Name must not be empty string");
        }
    }

    set last_name(new_last_name){
        if (typeof new_last_name === "string" && new_last_name.length > 0){
            this._last_name = new_last_name;
        }
        else{
            console.error("Last Name must not be empty string");
        }
    }

    set age(new_age){
        if (typeof new_age === "number" && new_age > 0){
            this._age = new_age;
        }
        else{
            console.error("Age must be a non negative number");
        }
    }

    get first_name(){
        return `${this._first_name}`;
    }

    get last_name(){
        return `${this._last_name}`;
    }

    get age(){
        return `${this._age} years old`;
    }
}

const rect = new Rectangle(9, 9);

rect.width = 20;
rect.height = 30;

console.log(rect.width);
console.log(rect.height);
console.log(rect.area);

const namae = new Name("Ton", "Server", 2);

console.log(namae.first_name);
console.log(namae.last_name);
console.log(namae.age);