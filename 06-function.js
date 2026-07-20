// This section talks about functions in JavaScript, which are blocks of code designed to perform a particular task. Functions can take inputs, called parameters, and can return an output. They are fundamental building blocks in JavaScript and allow for code reusability and modularity.

// Also remember that function can be without a name as well, which is called anonymous function. It can be stored in a variable and can be called using that variable name. For example:
let greet = function(name){
    return `Hello ${name}`;
}

// Write a function named makeTea that takes one parameter typeOfTea and returns a string like "Making green tea" when called with "green tea". Store the result in a variable named teaOrder and print it to the console.
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea(`green tea`);
console.log(teaOrder);


// Create a function named orderTea, that takes one parameter teaType. Inside this function create another function confirmOrder that returns a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.
// This is related with JavaScript execution context, can search for its editorials to learn more.
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let ans = orderTea(`chai`);
console.log(ans);

// Write an arrow function named calculateTotal that takes two parameters price and quantity. The function should return the total cost by multiplying price and quantity. Store the result in a variable named totalCost and print it to the console.
// To create an arrow function with the name greet we follow the syntax below:
/* const greet = (parameters) => {

    BODY
    
    }
*/
const calculateTotal = (price, quantity) => {
    return price * quantity;
}
let totalCost = calculateTotal(10, 5);
console.log(totalCost);
// And it turns out, there is one more way to write this function when there is only one line in the body of the function, we can omit the return statement and the curly braces. The syntax is as follows:
/* const greet = (parameters) => expression */
const calculateTotal2 = (price, quantity) => price * quantity;
let totalCost2 = calculateTotal2(10, 5);
console.log(totalCost2);

//Write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with the argument earl grey. Return the result of calling makeTea.
function makeTea(teaType){
    return teaType;
}
function processTeaOrder(makeTea){    // here we dont need to type the name makeTea exactly in the parameter if we are calling it, we can write any name as its just a placeholder.
    return makeTea(`earl grey`);
}
let order = processTeaOrder(makeTea);
console.log(order);
// Now this type of function where we can take a fucntion as an argument and also return a function is called a higher order function. This is a very important concept in JavaScript and is used extensively in functional programming. One more small example of this is:
function greets(typeOfGreeting){
    return typeOfGreeting;
}
function processGreeting(greets){
    return greets(`Good Morning`);
}
let greeting = processGreeting(greets);
console.log(greeting);

// Write a function named createTeaMaker that returns another function. The returned function should take one parameter teaType and return a message like "Making green tea". Store the returned function in a variable named teaMaker and call it with green tea.
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker(); 
console.log(teaMaker(`green tea`));  // here the teaMaker variable holds our function and when we call teaMaker(`green tea`) it puts green tea as the argument for the teaType parameter in the function returned by createTeaMaker.

// Now there is also a feature of JavaScript called closure, which allows a function to access variables from its outer scope even after the outer function has finished executing. This is particularly useful for creating private variables and functions. For example:
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        return `Outer: ${outerVariable}, Inner: ${innerVariable}`;  // here we can see that in this inner function we are able to access the outerVariable from the outerFunction even after it has finished executing.
    };
}

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array. For example, if we have an array of numbers and we want to create a new array with each number doubled, we can use the map() method like this:
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
// It is important to note that the map() method does not change the original array, it returns a new array with the modified values.
// It can also be used with an arrow function like if we need to square an array of numbers we can do it like this:
const squareNumbers = (arr) => {
    return arr.map((num) => num*num);
}

// the this keyword in JavaScript refers to the object that is currently executing the code. It can be used to access properties and methods of the current object. The value of this depends on how a function is called. For example, in a method of an object, this refers to the object itself, while in a regular function, this refers to the global object (window in browsers). In strict mode, this will be undefined in a regular function.
// for example, if we have an object person with a method greet, we can use this to access the name property of the person object like this:
let person = {
    name: "Alice",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(person.greet());  // Output: "Hello, my name is Alice"


//Create an object person with a method introduce() that uses this, additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()
const person = {
    name: "Hitesh",
    age: 19.5,
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
// Now here while writing the introduce method inside the function we write it in this way and not like const introduce = function(){....} because inside an object we dont create variables, we create properties and thus we cant use the let and const keywords. So we can write it like this introduce: function(){....} or we can write it in this way introduce(){....} which is a shorthand for the same thing. And when we call person.introduce() it will return the string "Hi, my name is Hitesh and I am 19.5 years old."
// And also inside an object we dont use the arrow function syntax for methods because the this keyword inside an arrow function does not refer to the object itself, but rather to the enclosing lexical context. So if we use an arrow function for the introduce method, this.name and this.age will be undefined. Thus we should use the regular function syntax for methods inside objects. Lexical context is the context in which a function is defined, and it determines the value of this based on where the function is defined, not where it is called. So if we use an arrow function for the introduce method, this will refer to the global object (window in browsers) instead of the person object, and thus this.name and this.age will be undefined.


// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
function outer() {
    function inner() {
        return 'Inner function called';
    }
    return inner();
}