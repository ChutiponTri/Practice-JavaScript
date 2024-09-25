try{
    console.log("Hello");
    throw new Error("Who are you Hello to");
}
catch(error){
    console.log("Error", error);
}
finally{
    console.log("You have reached the end!");
}