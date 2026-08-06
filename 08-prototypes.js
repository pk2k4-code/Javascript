// This section deals with prototypes in JavaScript. In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. This allows for a powerful and flexible way to create objects and share functionality between them. When we try to access a property or method on an object, JavaScript will first look for that property or method on the object itself. If it doesn't find it there, it will look for it on the object's prototype, and then on the prototype's prototype, and so on, until it reaches the end of the prototype chain. This is known as prototypal inheritance.

let computer = { cpu: 12 };
let asus =  {
    screen: "HD"
}
console.log(asus.cpu); // This will give us undefined because the asus object does not have a cpu property and it does not inherit from the computer object. But if we do __proto__: computer in asus; then the asus object will inherit from the computer object and we can access the cpu property like this: console.log(asus.cpu); or by console.log(asus.__proto__) // This will give us 12 because the asus object now inherits from the computer object and has access to its properties and methods. But it is not a good practice to use __proto__ because it is deprecated and can lead to unexpected behavior. Instead, we can use Object.create() method to create a new object that inherits from another object. For example, let asus = Object.create(computer); will create a new object asus that inherits from the computer object. Now we can access the cpu property like this: console.log(asus.cpu); // This will give us 12 because the asus object now inherits from the computer object and has access to its properties and methods. We can write it like:
let computer = { cpu: 12, ram: 16 };
let asus = {
    screen: "HD"
}
Object.setPrototypeOf(asus, computer); // This will set the prototype of the asus object to the computer object. Now we can access the cpu and ram properties like this: console.log(asus.cpu); // This will give us 12 because the asus object now inherits from the computer object and has access to its properties and methods. console.log(asus.ram); // This will give us 16 because the asus object now inherits from the computer object and has access to its properties and methods.
console.log(asus.cpu); // This will give us 12 because the asus object now inherits from the computer object and has access to its properties and methods.
console.log(asus.ram); // This will give us 16 because the asus object now inherits from the computer object and has access to its properties and methods.
console.log(computer.screen); // This will give us undefined because the computer object does not have a screen property and it does not inherit from the asus object.
console.log(Object.getPrototypeOf(asus)); // This will give us the computer object because the asus object inherits from the computer object. Its output will be { cpu: 12, ram: 16 } because the computer object has two properties cpu and ram. We can also use the instanceof operator to check if an object is an instance of a particular constructor function or class. For example, if we have a constructor function Person and we create a new object john using the new keyword like this: let john = new Person("John", 30); then we can check if john is an instance of Person like this: console.log(john instanceof Person); // This will give us true because john is an instance of Person. We can also check if john is an instance of Object like this: console.log(john instanceof Object); // This will give us true because all objects in JavaScript inherit from Object.


// Several forms of examples:
// Example 1:
let person = {
    eyes: 2,
    legs: 2,
    nose: 1
}
let John = {
    name: "John",
    age: 30,
    gender: "male",
    __proto__: person
}
console.log(`John `, John.__proto__);  // output: John  { eyes: 2, legs: 2, nose: 1 }
console.log(`John has ${John.eyes} eyes, ${John.legs} legs and ${John.nose} nose.`);

// Example 2:
let car = {
    horn: 1,
    tyres: 4,
    windows: 4,
    engine: 1
}
let audi = {
    model: "A4",
    color: "white",
    price: 40000,
}
Object.setPrototypeOf(audi, car);
console.log(`Audi `, Object.getPrototypeOf(audi));   // output: Audi  { horn: 1, tyres: 4, windows: 4, engine: 1 }
console.log(`Audi has ${audi.horn} horn, ${audi.tyres} tyres, ${audi.windows} windows, ${audi.engine} engine and its model is ${audi.model} and its color is ${audi.color} and its price is ${audi.price}.`);


// Suppose we have an Animal:
function Animal() {}
Animal.prototype.speak = function() {
    return "Animal speaking";
};
// Now when we do:
const animal = new Animal();
// Javascript automatically does this:
const animal = {};
Object.setPrototypeOf(animal, Animal.prototype);
// Now the chain is : animal -> Animal.prototype -> Object.prototype
// Now if we create a new animal dog and we want to set prototype of dog to be animal, we can do it like this:
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  // we write this line because if we do: Dog.prototype = Object.create(Animal.prototype); then the constructor of Dog will be Animal, so we need to set it back to Dog. Now if we create a new dog:
const dog = new Dog();
console.log(dog.constructor);  // This would have given Animal if we have not written that line above but now it will give Dog because we have set the constructor of Dog back to Dog.


// When inheriting from another object use Object.setPrototypeOf(obj, parentObj) or Object.create(parentObj).

// When inheriting between constructor function or classes use child.prototype = Object.create(parent.prototype) and child.prototype.constructor = child. This is because when we create a new object using a constructor function, the new object inherits from the constructor function's prototype. So, if we want to create a new object that inherits from another object, we need to set the prototype of the new object's constructor function to be an object that inherits from the parent object's prototype. This way, the new object will have access to the properties and methods of the parent object through the prototype chain.