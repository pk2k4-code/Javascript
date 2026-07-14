// This section is about loops in JavaScript. Loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.

// Almost everything is like Java here, but there are some differences. For example, in JavaScript, we can use the for...in loop to iterate over the properties of an object, and the for...of loop to iterate over the values of an iterable object (like an array or a string). 


// For Loop - The for loop is used to execute a block of code a specific number of times. It consists of three parts: the initialization, the condition, and the increment/decrement. The syntax is as follows:
for (initialization; condition; increment/decrement) {
    // code block to be executed
}


// Example of a for loop that prints numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// While Loop - The while loop is used to execute a block of code as long as a specified condition is true. The syntax is as follows:
while (condition) {
    // code block to be executed
}


// Example of a while loop that prints numbers from 1 to 5
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


// Do...While Loop - The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The syntax is as follows:
do {
    // code block to be executed
} while (condition);


// Example of a do...while loop that prints numbers from 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// Write a while loop that counts down from 5 to 1 and stores the numbers in an array. Then, print the array to the console.
let arr = [];
let  i = 5;
while(i>0){
    arr.push(i);
    i--;
}
console.log(arr);


// Write a do-while loop that prompts a user to enter their favourite tea type until they enter stop. Store each tea type in an array named teaCollection. After the loop ends, print the teaCollection array to the console.
let teaCollection = [];
let tea;
do{
    tea = prompt("Enter the type of tea you like (or type 'stop' to finish):");  // will only work in browser console
    if(tea !== 'stop'){
        teaCollection.push(tea);
    }
}while(tea !== 'stop');


// Write a for loop that multiplies each number in an array [2,4,6] by 2 and stores the results in a new array. Then, print the new array to the console.
let multipliedNumbers = [];
let array = [2,4,6];
let newNum;

for(let j = 0; j<array.length; j++){
    newNum = array[j] * 2;
    multipliedNumbers.push(newNum);
}
console.log(multipliedNumbers);


// Write a for-of loop to iterate through the array [1,2,3,4,5] and stop when 4 is found. Store the numbers before 4 in a new array and print that array to the console.
let numbers = [1,2,3,4,5];
let newArray = [];
for(let num of numbers){
    if(num === 4){
        break;
    }
    newArray.push(num);
}
console.log(newArray);


// Write a for-in loop to iterate through the properties of an object {name: "Alice", age: 25, city: "New York"} and print each property and its value to the console.
let person = {name: "Alice", age: 25, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}



// Use a for-in loop to loop through an object containing city population. Stop the loop when the population of Berlin is found, and store all the cities population before Berlin in a new object. Print the new object to the console.
let citiesPopulation = {
    NewYork: 8419600,   // here no need to use quotes as the keys are already termed as strings in an object, but if the key has spaces or special characters other than underscore, we need to use quotes.
    "Los Angeles": 3980400,
    Chicago: 2716000,
    Berlin: 3769000,
    Tokyo: 13929286
}
let newObject = {};
for(let city in citiesPopulation){
    if(city === "Berlin"){
        break;
    }
    newObject[city] = citiesPopulation[city]; // here the right side does the work of reading and left side does the work of writing, so here in left side newObject[city] looks for the city key in the object citiesPopulation and makes a key with the same name in newObject and then in the right side, it reads the value of the city key in citiesPopulation and assigns that value to the corresponding key in newObject. This way, we are copying the key-value pairs from citiesPopulation to newObject until we reach Berlin.
    //Here we should not use newObject[city] = citiesPopulation.city; because in this case, it will look for a key named "city" in citiesPopulation object which does not exist, so it will return undefined. Instead, we should use newObject[city] = citiesPopulation[city]; because here city is a variable that holds the current key name in the loop, so it will correctly access the value of that key in citiesPopulation object.
}
console.log(newObject);


// Use a for-in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named largeCities. Print the largeCities object to the console.
let citiesPopulationFilter = {
    NewYork: 84100,
    "Los Angeles": 3980400,
    Chicago: 2716000,
    Berlin: 3769000,
    Tokyo: 13924
};
let largeCities = {};
for(let city in citiesPopulationFilter){
    if(citiesPopulationFilter[city] < 3000000){
        continue;
    }
    largeCities[city] = citiesPopulationFilter[city];
}
console.log(largeCities);


// Write a for-each loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop the loop when chai is found, and store all previous tea types in an array named availableTeas. Print the availableTeas array to the console.
let teas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
let foundChai = false; // This flag tracks if we should stop collecting teas

teas.forEach(function(tea) {
    if (tea === "chai") {
        foundChai = true;
    }
    
    if (!foundChai) {
        availableTeas.push(tea);
    }
});

console.log(availableTeas);


// Write a for-each loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Skip when chai is found, and store all previous tea types in an array named availableTeas. Print the availableTeas array to the console.
let teas2 = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas2 = [];
teas2.forEach(function(tea){
    if(tea == 'chai'){
        return;
    }
    availableTeas2.push(tea);
});
console.log(availableTeas2);