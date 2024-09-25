// Delcare Variables
const button = document.getElementById("mySubmit");

// Declare Functions
function on_click(){
    const num_of_dice = document.getElementById("numDice").value;
    const dice_result = document.getElementById("diceResult");
    const dice_images = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i=0; i<num_of_dice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="https://raw.githubusercontent.com/ChutiponTri/LE402/main/dice/dice${value}.jpg" alt="Dice ${value}">`);
    }
    console.log(values);
    dice_result.textContent = `dice: ${values.join(', ')}`;
    dice_images.innerHTML = images.join('');
}
button.onclick = on_click;