// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web app
//        JSON Files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON String -> json.dumps()
//        JSON.parse() = converts a JSON String to a JS object -> json.loads()

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const namesString = JSON.stringify(names);
console.log(namesString);

const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["JellyFishing", "Karate", "Cooking"]
};
const personString = JSON.stringify(person);
console.log(personString);

const people = [{
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    }, {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },{
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    }, {
        "name": "Sandy",
        "age": 27,
        "isEmployed": true
}];
const peopleString = JSON.stringify(people);
console.log(peopleString);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.log(error));
    

