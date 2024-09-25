// class = (ES6 feature) provides more structure and cleaner way to work with objects compare to
//         traditional constructor functions ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    display_product(){
        console.log(`Product: ${this.name}`);
        console.log(`Price $${this.price.toFixed(2)}`);
    }

    calculate_total(saletax){
        return this.price + (this.price * saletax);
    }
}


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pant", 22.50);
product1.display_product();
product2.display_product();

const total1 = product1.calculate_total(0.05);
console.log(`Total Price 1 is $${total1.toFixed(2)}`);

const total2 = product2.calculate_total(0.05);
console.log(`Total Price 2 is $${total2.toFixed(2)}`);