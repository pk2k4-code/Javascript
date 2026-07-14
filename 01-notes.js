// This is for some random notes I want to take while learning JavaScript. I will keep adding to this file as I learn more about JavaScript.

//If we want to have a value in JavaScript that never changes then instead of let we can use const. This is a good practice to use const for variables that we don't want to change. It helps us to avoid accidental changes to the variable. If we try to change the value of a const variable, we will get an error. Its done like: const variable = 33;

// To take input in Javascript, there are many ways, one of which is using prompt: 
let name = prompt("What is your name?");
//But this only works in the browser console.

// For any exponential operation in JavaScript we can use the ** operator. For example, 2 ** 3 will give us 8. This is equivalent to Math.pow(2, 3) which will also give us 8. Like, let expo = 2 ** 3;

// For printing, use console.log() function. It can take multiple arguments and print them in the console. For example, console.log("Hello", "World") will print Hello World in the console. We can also use template literals to print variables and expressions in the console. For example, let name = "John"; console.log(`Hello ${name}`) will print Hello John in the console.

// TypeCasting - In JavaScript, we can convert a value from one type to another using type casting. For example, we can convert a string to a number using the Number() function, or we can convert a number to a string using the String() function. We can also use the parseInt() and parseFloat() functions to convert strings to integers and floating-point numbers, respectively. For example, let num = Number("42"); will convert the string "42" to the number 42. Like let user = "Raj"; Now console.log(Number(user)); will give us NaN because we cannot convert a string to a number. And if we do console.log(typeof Number(user)); it will give us number because NaN is also a number.

// For comparison in JavaScript there is loose equality (==) and strict equality (===). Loose equality (==) compares values for equality after converting both values to a common type. Strict equality (===) compares both value and type, and returns true only if both are the same. For example, 5 == "5" will return true because the string "5" is converted to a number before comparison. However, 5 === "5" will return false because the types are different (number vs string). For not equal comparison, we can use != for loose inequality and !== for strict inequality. For example, 5 != "5" will return false because the string "5" is converted to a number before comparison. However, 5 !== "5" will return true because the types are different (number vs string). But using these operators can lead to unexpected results, so it is recommended to use strict equality (===) and strict inequality (!==) for comparisons in JavaScript. Also using these for objects or arrays only compares the reference of the object or array and not the value. For example, let obj1 = {name: "John"}; let obj2 = {name: "John"}; console.log(obj1 === obj2); will return false because they are two different objects in memory even though they have the same value. But if we do let obj3 = obj1; console.log(obj1 === obj3); will return true because they are pointing to the same object in memory.

// To compare datatypes in JavaScript, we can use the typeof operator. It returns a string indicating the type of the unevaluated operand. For example, typeof 42 will return "number", typeof "Hello" will return "string", and typeof true will return "boolean". However, there are some quirks with the typeof operator. For example, typeof null returns "object", which is a well-known bug in JavaScript. Also, typeof NaN returns "number", even though NaN stands for "Not a Number". This can be like:
let score = 44;
if(typeof score === 'number'){
    console.log("The score is a number");
}
else{
    console.log("The score is not a number");
}

// If we dont declae any variable before using them, then they will be created as global variables. This can lead to unexpected behavior and bugs in our code. It is a good practice to always declare our variables using let, const, or var before using them. For example, if we do x = 10; without declaring x first, it will create a global variable x with the value 10. But if we do let x = 10; it will create a block-scoped variable x with the value 10.

// To get the length of a string we can use string.length