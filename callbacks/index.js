// Callback = a function that is passed as an argument to another function
//            used to handle asynchronous operations
//            1. Reading a file
//            2. Network request
//            3. Interact with databases
//            "Hey, when you're done, call this next"


// Declare Functions
function hello(callback){
    console.log("Hello");
    callback();
}
function goodbye(){
    console.log("Good bye");
}
function leave(){
    console.log("Leave !");
}
function wait(){
    console.log("Wait !");
}
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function display_console(result){
    console.log(result);
}
function display_page(result){
    document.getElementById("myH1").textContent = result;
}

// Execute Functions
hello(wait);
sum(display_page, 1, 3);
