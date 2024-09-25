// Declare Variables
let age = 25;
let time = 9;
let is_student = false;
let has_license = false;

// Create Statements
if (age >= 15){
    console.log(`You are ${age} years old.`);
}
else{
    console.log(`You are ${age} years old.`);
}

if (time < 12){
    console.log(`Good Morning ${time}`);
}
else{
    console.log(`Good Afternoon ${time}`);
}

if (is_student){
    console.log(`You are a student`);
}
else{
    console.log(`You are not a student`);
}

if (age >= 16){
    console.log("You are old enough to drive");
    if (has_license){
        console.log("You can drive !");
    }
    else{
        console.log("You can apply for license");
    }
}
else{
    console.log("You must be 16+ to drive");
}


// Redeclare Variables
const text = document.getElementById("myText");
const button = document.getElementById("mySubmit");
const result = document.getElementById("myResult");

// Declare Function
function on_click(){
    age = Number(text.value);
    if (age >= 100){
        result.textContent = `You are TOO old (${age})`;
    }
    else if (age == 0){
        result.textContent = `You are just born (${age})`;
    }
    else if (age < 0){
        result.textContent = `Your age can't be below (${age})`;
    }
    else if (age > 18){
        result.textContent = `Your are ${age}, you can come in`;
    }
    else{
        result.textContent = `You must be 18+ (${age})`;
    }
}

button.onclick = on_click;
