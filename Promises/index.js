// Promises = An object that manages asynchronous operations. Wrap a promise object around {asynchronous code}
//            "I promise to return a value" 
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve, reject)) => {asynchronous code}

// DO THESE IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalk = true

            if (dogWalk){
                resolve("You walk the dog");
            } else{
                reject("You didn't walk the dog");
            }
        }, 2000);
    });
}

function cleanKitchen(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean = false;
            if (clean){
                resolve("You clean the kitchen");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 1000);
    });
}

function takeOutTrash(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const takeOut = false;
            if (takeOut) {
                resolve("You take out the trash");
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);

    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); console.log("Finish")})
    .catch(error => console.log(error));