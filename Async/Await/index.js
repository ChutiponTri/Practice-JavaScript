// Async = makes a function return a promise
// Await = makkes an async function wait for a promise

//         Allows you you to write asynchronous manner
//         Async doesn't have resolve or reject parameter
//         Everything after Await is placed in an event queue


async function walkDog(callback){
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

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("Finish all chores");
    } catch(error){
        console.log(error);
    }
}

doChores();