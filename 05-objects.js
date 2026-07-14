// This section is about objects in JavaScript. Objects are a fundamental data structure that allows us to store collections of key-value pairs. Each key (also known as a property) is a string, and each value can be any data type, including other objects or functions.


// Creating an Object - We can create an object using either the object literal syntax or the Object constructor. The syntax is as follows:
let obj1 = {}; // Object literal
let obj2 = new Object(); // Object constructor


// Example of creating an object with properties
let person = {
    firstName: "John",    // the first one is called key which is firstName and the second one is called value which is John
    lastName: "Doe",
    age: 30
};


// Accessing Object Properties - We can access the properties of an object using either dot notation or bracket notation. The syntax is as follows:
// Dot notation
console.log(person.firstName); // Output: John
console.log(person.lastName); // Output: Doe
console.log(person.age); // Output: 30
// Bracket notation
console.log(person["firstName"]); // Output: John, and we need to put the key in quotes when using bracket notation beacuse the key is a string. If we don't put it in quotes, JavaScript will look for a variable with that name instead of treating it as a string.
console.log(person["lastName"]); // Output: Doe
console.log(person["age"]); // Output: 30


// Adding and Modifying Object Properties - We can add new properties to an object or modify existing properties using either dot notation or bracket notation. The syntax is as follows:
// Adding a new property
person.gender = "male"; // Output: { firstName: 'John', lastName: 'Doe', age: 30, gender: 'male' }
person["country"] = "USA"; // Output: { firstName: 'John', lastName: 'Doe', age: 30, gender: 'male', country: 'USA' }
// Modifying an existing property
person.age = 31; // Output: { firstName: 'John', lastName: 'Doe', age: 31, gender: 'male', country: 'USA' }
person["lastName"] = "Smith"; // Output: { firstName: 'John', lastName: 'Smith', age: 31, gender: 'male', country: 'USA' }


// Use a for-in loop to loop through an object containing city population. Stop the loop when the population of Berlin is found, and store all the cities population before Berlin in a new object. Print the new object to the console.
let citiesPopulation = {
    NewYork: 8419600,
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