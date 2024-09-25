// NUMBER GUESSING GAME

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempt = 0;
let guess;
let running = true;

while (running){
    guess = window.prompt(`Guess a number between ${min} to ${max}`);
    guess = Number(guess);
    if (isNaN(guess)){
        window.alert("Please Enter a Valid Number");
    }
    else if (guess < min || guess > max){
        window.alert(`Please Enter Number between ${min} to ${max}`);
    }
    else{
        attempt ++;
        if (guess < answer){
            window.alert("Too Low");
        }
        else if (guess > answer){
            window.alert("Too High");
        }
        else{
            window.alert(`Correct. Answer is ${answer}, attempt ${attempt}`);
            running = false
        }
    }
}

console.log(answer);