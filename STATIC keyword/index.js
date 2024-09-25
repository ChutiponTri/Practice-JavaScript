// static = keyword that defines properties or methods that belong to a class itself rather than the object
//          created from that class (class owns anything static, not the object)

class MathUtil{
    static PI = 3.14159;
    static get_diameter(radius){
        return radius * 2;
    }
    static get_circumference(radius){
        return 2 * this.PI * radius; 
    }
    static get_area(radius){
        return this.PI * radius;
    }
}

class User{
    static user_count = 0;

    constructor(username){
        this.username = username;
        User.user_count ++;
    }

    say_hello(){
        console.log(`Hello, I am ${this.username}`);
    }

    static get_user_count(){
        console.log(`There are ${User.user_count}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.username);
console.log(user2.username)
console.log(User.user_count);

user1.say_hello();
user2.say_hello();

User.get_user_count();

console.log(MathUtil.PI);
console.log(MathUtil.get_diameter(20));
console.log(MathUtil.get_circumference(21));
console.log(MathUtil.get_area(2));