// This section deals with the Object Oriented part of javacript. In JavaScript, objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be any data type, including other objects or functions. Objects allow us to group related data and functionality together, making our code more organized and easier to manage.


// Javascript is a prototype-based language, which means that objects can inherit properties and methods from other objects. This is different from class-based languages like Java or C++, where classes define the structure and behavior of objects. In JavaScript, we can create new objects based on existing ones using prototypes, allowing for a more flexible and dynamic approach to object-oriented programming. But this does not mean that JavaScript does not have classes, it does have classes but they are just syntactic sugar over the existing prototype-based inheritance and do not introduce a new object-oriented mode. Classes in JavaScript are primarily a way to create constructor functions and manage inheritance more easily, but they still rely on the underlying prototype-based system. It seems like we are using classes in JavaScript but we are actually using prototypes under the hood. So, classes in JavaScript are just a more convenient way to create objects and manage inheritance, but they do not change the fundamental nature of the language as a prototype-based language.


// Now we will give some more details about prototype to clear any sort of confusion.
// First of all you should know that prototypes are helpful in saving memory, suppose we write a function and we create 1000 objects using that function, then if we write a method inside that function, then that method will be created 1000 times in memory, which is not good. So, to avoid this problem, we use prototypes.
// Every constructor function automatically has an object called prototype. If we write:
function Person(name) {
    this.name = name;
}
// JavaScript secretly creates Person.prototype = {} behind the scenes. The prototype is just an ordinary object and we can put methods inside it, like:
Person.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
};
//Now there is only one greet method in Person.prototype. Now if we create an object using the Person constructor function, like:
const p1 = new Person('Priyanshu');
// So the object p1 will have the name property inside of it as name = 'Priyanshu', but there will not be any greet inside of p1, instead JavaScript secretly stores a link from p1 to Person.prototype and this hidden link is called the "Object's Prototype".
// Now suppose we write p1.greet(), so how will JavaScript find this method:
// First it looks inside of p1 and it finds no greet(), then it follows the hidden link Person.prototype and reaches it and searches for greet() there and finds it