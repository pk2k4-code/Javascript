// Datatypes in JavaScript are primarily divided into 2 parts : Primitive and Object(Reference) datatypes.
// Primitive Datatypes are immutable and include String, Number, Boolean, Null, Undefined, Symbol, and BigInt.
// Object Datatypes are mutable and include Objects, Arrays, Functions, Dates, etc.

// String - represents textual data and is enclosed in single or double quotes or backticks(`).
let name1 = "John Doe"; // String
let name2 = "Jane Smith"; // String can be made like this as well
let name3 = `Alice Johnson`; // String using backticks
console.log(typeof name1); // Output: string
console.log(`The three names are: ${name1}, ${name2}, and ${name3}`); // Here with the help of backticks we can bypass old concatenation method and use this one to join several variables.


// Number - represents both integer and floating-point numbers.
let age = 30; // Number
let height = 5.9; // Number (floating-point)
let sqroot = Math.sqrt(-1); // Number and its a special value of the Number datatype: NaN (Not a Number) - result of invalid mathematical operation like finding the square root of a negative number or dividing zero by zero.
let posinfinityValue = 1 / 0; // Number and its a special value of the Number datatype: Infinity - result of dividing a number by zero.
let neginfinityValue = -1 / 0; // Number and its a special value of the Number datatype: -Infinity - result of dividing a negative number by zero.
let zero1 = -5 * 0; // Number and its a special value of the Number datatype: -0 - result of multiplying a negative number by zero.
let zero2 = 5 * 0; // Number and its a special value of the Number datatype: +0 - result of multiplying a positive number by zero.
console.log(typeof age); // Output: number
console.log(typeof sqroot); // Output: number
console.log(typeof posinfinityValue); // Output: number
console.log(typeof neginfinityValue); // Output: number
console.log(typeof zero1); // Output: number
console.log(typeof zero2); // Output: number
// So we could use and directly assign these special values to a variable and use them in our code as well like let val = NaN; or let val = Infinity; or let val = -Infinity; or let val = -0; or let val = +0; and use them in our code as well.


// BigInt - represents integers with arbitrarily large, beyond the range of the Number type. It is created by appending 'n' to the end of an integer literal.
let bigIntValue = 1234567890123456789012345678901234567890n;
let anotherBigIntValue = BigInt("1234567890123456789012345678901234567890"); // BigInt can also be created using the BigInt() constructor.
console.log(`The BigInt values are: ${bigIntValue} and ${anotherBigIntValue}`);
console.log(typeof bigIntValue); // Output: bigint


// Boolean - represents a logical entity and can have two values: true and false.
let isJavaScriptFun = true;
console.log(`Is JavaScript fun? ${isJavaScriptFun}`);
console.log(typeof isJavaScriptFun); // Output: boolean


// Null - represents the intentional absence of any object value, it is explicitly designed to indicate nothing. It is one of JavaScript's primitive values.
let emptyValue = null;
console.log(`The null value is: ${emptyValue}`);
console.log(typeof emptyValue); // Output: object, typeof null returns "object". This is a well-known, historical bug in JavaScript that cannot be fixed because it would break existing web infrastructure. It is still a primitive.
console.log(emptyValue); // Output: null, we can find type here without writing typeof, this only returns works for null or undefined, for other datatypes it will return the value of the variable.


// Undefined - represents a variable that has been declared but has not yet been assigned a value. It is also a primitive value.
let uninitializedVariable;
console.log(`The undefined value is: ${uninitializedVariable}`);
console.log(typeof uninitializedVariable); // Output: undefined
console.log(uninitializedVariable); // Output: undefined


// Symbol - represents a unique and immutable primitive value and may be used as the key of an Object property. It is often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
let uniqueSymbol1 = Symbol("description1");
let uniqueSymbol2 = Symbol("description1"); // Even though the description is the same, these two symbols are unique and different from each other.
console.log(`The unique symbol is: ${uniqueSymbol1.toString()}`); // Output: The unique symbol is: Symbol(description1)
console.log(typeof uniqueSymbol1); // Output: symbol


// Objects are mutable and stored by reference. When you assign an object to a variable, the variable doesn't hold the actual data; it holds a pointer (reference) to the location in memory where the data lives.
// Types of Objects include Standard Object, Arrays, Functions, Dates, and more. {} and [] is also an object in JavaScript.
// Object - represents a collection of properties, where each property is a key-value pair. Objects can be created using object literals, constructors, or classes.


// Standard Object
let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};
console.log(person); // Output: { name: "John Doe", age: 30, isEmployed: true }
console.log(person.name); // Output: John Doe
console.log(typeof person); // Output: object


// Array - represents an ordered collection of values, which can be of any type, but we should ususally keep them homogeneous. Arrays are created using square brackets [].
let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  22,
  true,
  null,
  undefined,
  Symbol("fruit"),
];
console.log(fruits[0]); // Output: Apple
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", 22, true, null, undefined, Symbol("fruit")]
console.log(typeof fruits); // Output: object


// Function - represents a block of code designed to perform a particular task. Functions can be created using function declarations, function expressions, or arrow functions.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!


// Date - represents a single moment in time in a platform-independent format. Dates are created using the Date constructor.
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
