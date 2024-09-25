// TEMPERATURE CONVERTION PROGRAM

// Declare Variables
const button = document.getElementById("mySubmit");
const textbox = document.getElementById("TextBox");
const toF = document.getElementById("toFarenheit");
const toC = document.getElementById("toCelsius");
const result = document.getElementById("Result");
const myResult = document.getElementById("myResult");

let temp;

// Declare Functions
function on_click(){
    if (toF.checked){
        result.textContent ="You selected to Farenheit";
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        myResult.textContent = temp.toFixed(1) + " Farenheit";
    }
    else if (toC.checked){
        result.textContent = "You selected to Celsius";
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        myResult.textContent = temp.toFixed(1) + " Celsius";
    }
    else{
        result.textContent = "Please select a Unit";
    }
    console.log("Button Clicked");
}

button.onclick = on_click;

