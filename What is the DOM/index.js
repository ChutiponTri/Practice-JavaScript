document.title = "My Website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Ton Server";
const welcomeMsg = document.getElementById("myH1");

welcomeMsg.style.color = "white";
welcomeMsg.textContent = username === "" ? "Guest" : username;

console.dir(document);