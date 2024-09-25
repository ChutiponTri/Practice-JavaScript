// While loop

// let Name;

// do{
//     Name = window.prompt("Enter your Name");
// }while (Name === "" || Name === null)

// console.log(`Hello ${Name}`);


let Login = false;
let Username;
let Password;

while (!Login){
    Username = window.prompt("Enter Your Username");
    Password = window.prompt("Enter Your Password");
    if (Username === "Ton" && Password === "Ton"){
        Login = true;
        console.log("Logged in");
    }
    else{
        console.log("Invalid credential");
    }
}