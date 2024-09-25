// Variable scope = where a variable is recognized and accessible
//                  (local vs global)

// Declare Variables
let x = 3;

// Declare Functions
function func_1(){
    let x = 1;
    console.log(x);
}

function func_2(){
    let x = 2;
    console.log(x);
}

function func_3(){
    console.log(x);
}

// Execute Functions
func_1();
func_2();
func_3();
