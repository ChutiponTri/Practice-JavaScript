// 1. document.getElementById()         // Element or Null
// 2. document.getElementByClassName()   // HTML Collection
// 3. document.getElementByTagName()    // HTML Collection
// 4. document.querySelector()          // First Element or Null
// 5. document.querySelectorAll()       // NodeList


// get By Id
const myHeading = document.getElementById("myH1");
myHeading.style.backgroundColor = "Red";
myHeading.style.textAlign = "center";

console.log(myHeading);

// get By Classname
const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow";

for (let fruit of fruits){
    fruit.style.color = "blue";
}

Array.from(fruits).forEach( fruit => {
    fruit.style.backgroundColor = "yellow";
})

console.log(fruits);


// get By Tagname
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow";
liElements[2].style.backgroundColor = "Red";

Array.from(liElements).forEach( element => {
    element.style.backgroundColor = "yellow";
})

console.log(h4Elements);

// querySelector
const element = document.querySelector(".fruits");
element.style.backgroundColor = "pink";

console.log(element);

// querySelectorAll
const fruitsNodeList = document.querySelectorAll(".fruits");
fruitsNodeList[0].style.backgroundColor = "green";

fruitsNodeList.forEach(fruit => {
    fruit.style.backgroundColor = "purple";
})

console.log(fruitsNodeList);