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