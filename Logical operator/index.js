// Logical Operator = used to combine or manipulate boolean values (true or false)
//                    AND = &&
//                    OR = ||
//                    NOT = !

const temp = 20;

if (temp > 0 && temp <= 30){
    console.log("Weather is GOOD");
}
else if (temp < 0 || temp >= 50){
    console.log("Weather is OK");
}
else{
    console.log("Weather is bad");
}


const isSunny = true;
if (!isSunny){
    console.log("It's Cloudy");
}
else{
    console.log("It's Sunny");
}