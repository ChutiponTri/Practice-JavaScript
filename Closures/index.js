// Closure = A Function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allows for private variables and state maintenance
//           Used frequently in JS frameworks : React, Vue, Angular


// Example of Private Variables
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}

outer();


// Example of State Maintenance
function createCounter(){
    let count = 0;
    function increment(){
        count ++;
        console.log("Count is", count);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter);
console.log(counter.getCount());

// Example of Scores
function createGame(){
    let score = 0;
    function increaseScore(point){
        score += point;
        console.log("+", point);
    }
    function decreaseScore(point){
        score -= point;
        console.log("+", point);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(5);
game.decreaseScore(6);
game.increaseScore(3);
console.log("Get Score", game.getScore());