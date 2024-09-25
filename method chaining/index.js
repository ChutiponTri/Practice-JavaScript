// Method Chaining = Calling one method after another in one continuous line of code

let Username = window.prompt("Enter your username");

// NO METHOD CHAINING
Username = Username.trim();

let letter = Username.charAt(0);
letter = letter.toUpperCase();

let extra = Username.slice(1);
extra = extra.toLowerCase();

Username = letter + extra;
console.log(Username);
 
// METOHD CHAINING
Username = Username.trim().charAt(0).toUpperCase() + Username.slice(1).toLowerCase();
console.log(Username);
