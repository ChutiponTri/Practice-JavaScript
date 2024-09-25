// Create Variables
const btns = document.querySelectorAll("button");
const active = document.querySelector(".active");

for (let i=0; i<btns.length; i++){
    btns[i].onclick = function () {
        let move = (100 / btns.length) * i;
        active.style.left = move + "%";
    }
}