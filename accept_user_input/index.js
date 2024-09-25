// Declare Varaiables
let username;

// Declare Function
function on_click(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}

// 1. Promt Input (simple)
// username = window.prompt("What's your username?");

// 2. HTML Textbox Input (professional)
document.getElementById("mySubmit").onclick = on_click;

// console.log(username);