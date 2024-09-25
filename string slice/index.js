// String Slicing = Creating a substring from a portion of another string
//                  string.slice(start, end)

const FullName = "Tonlnwza Server";

// let FirstName = FullName.slice(0, 3);
// let LastName = FullName.slice(4);      // index 4 to end

let FirstName = FullName.slice(0, FullName.indexOf(" "));
let LastName = FullName.slice(FullName.indexOf(" ")).trim();
let FirstChar = FullName.slice(0, 1);
let LastChar = FullName.slice(-1);

console.log(FirstName);
console.log(LastName);
console.log(FirstChar);
console.log(LastChar);


const email = "chutipon.trir@gmail.com";

let Username = email.slice(0, email.indexOf("@"));
let Extension = email.slice(email.indexOf("@")+1).trim();
console.log(Username);
console.log(Extension);





