// const = a variable that can't be changed

// Delcare Variables
const PI = 3.14159;
let radius;
let circumference;
// radius = window.prompt("Enter the radius");

// Declare Function 
function on_click(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}

document.getElementById("mySubmit").onclick = on_click;