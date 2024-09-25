// classList = Element property in JavaScript used to interact 
//             with an element's list of classes (CSS Classes)
//             Allows you to make reusable classes for many elements
//             across your webpage

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")){
        event.target.textContent += "Eiei";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
})
