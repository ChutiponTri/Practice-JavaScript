
const date0 =  new Date();                              // Current Datetime
const date1 =  new Date(2024, 0, 1, 2, 3, 4, 5);        // Date(year, month, day, hour, minute, second, ms)
const date2 =  new Date("2024-01-02T12:00:00Z");
const date3 = new Date(170000000000000);                // ms
console.log(date0);
console.log(date1);
console.log(date2);
console.log(date3);

// Set Date
date0.setFullYear(2024);
date0.setMonth(0);
date0.setDate(1);
date0.setHours(2);
date0.setMinutes(3);
date0.setSeconds(4);
date0.setMilliseconds(5);

// Compare Dates
if (date2 > date1){
    console.log("Happy New Year");
}

// Get Date Data
const year = date0.getFullYear();
const month = date0.getMonth();
const day = date0.getDate();
const hour = date0.getHours();
const min = date0.getMinutes();
const secs = date0.getSeconds();
const dayOfWeek = date0.getDay();   // Like Sunday in number

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(secs);
console.log(dayOfWeek);