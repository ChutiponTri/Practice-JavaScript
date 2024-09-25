// RANDOM NUMBER GENERATOR

// Declare Variables
const button = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let random_num1;
let random_num2;
let random_num3;

// Declare Functions
function on_click(){
    random_num1 = Math.floor(Math.random() * max) + min;
    random_num2 = Math.floor(Math.random() * max) + min;
    random_num3 = Math.floor(Math.random() * max) + min;
    label1.textContent = random_num1;
    label2.textContent = random_num2;
    label3.textContent = random_num3;
}

button.onclick = on_click;



