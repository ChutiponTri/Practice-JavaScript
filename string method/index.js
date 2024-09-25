// string method = allow you to manipulate and work with text (strings)

let Username = "Tono";
let Lastname = "    TOOO";

let first_char = Username.charAt(0);        // Username[0]
console.log(first_char);

let index = Username.indexOf("o");          // Username.index("o")
console.log(index);

let last_index = Username.lastIndexOf("o"); // Username.rindex("o")
console.log(last_index);

let len = Username.length;                  // len(Username)
console.log(len);

let trims = Lastname.trim();                // Lastname.strip()
console.log(trims);

let upper = Username.toUpperCase();         // Username.upper()
console.log(upper);

let lower = Username.toLowerCase();         // Username.lower()
console.log(lower);

let repeat = Username.repeat(3);            // Username * 3
console.log(repeat);

let start_with_space = Username.startsWith(" ");  // Username.startswith(" ")
if (start_with_space){
    console.log("Username can't bein with ' '");
}
else{
    console.log("Your Username is Fine");
}

let end_with_space = Username.endsWith(" ");            // Username.endswith(" ")
if (end_with_space){
    console.log("Username can't end with ' '");
}
else{
    console.log("Your Username is Fine");
}

let include = Username.includes(" ");                   // " " in Username
if (include){
    console.log("Username can't include ' '");
}
else{
    console.log("Your Username is Fine");
}


let phoneNumber = "094-949-7232";

let replaced = phoneNumber.replaceAll("-", "");          // phoneNumber.replace("-", "")
console.log(replaced);

let padStart = phoneNumber.padStart(15, "0");            // phoneNumber.rjust(15, "0")
console.log(padStart);

let padEnd = phoneNumber.padEnd(15, "0");                // phoneNumber.ljust(15, "0")
console.log(padEnd);

