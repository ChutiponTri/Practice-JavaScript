// COUNTER PROGRAM

const decrease_btn = document.getElementById("decrease");
const increase_btn = document.getElementById("increase");
const reset_btn = document.getElementById("reset");
const counter_label = document.getElementById("countLabel");

let count = 0;

function decrease_func(){
    count --;
    counter_label.textContent = count;
}

function increase_func(){
    count ++;
    counter_label.textContent = count;
}

function reset_func(){
    count = 0;
    counter_label.textContent = count;
}

decrease_btn.onclick = decrease_func;
increase_btn.onclick = increase_func;
reset_btn.onclick = reset_func;