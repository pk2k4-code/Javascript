/*// This section starts to deal with the concept of object-oriented programming (OOP) in JavaScript. OOP is a programming paradigm that is based on the concept of objects, which can contain data and methods. In JavaScript, we can create objects using constructor functions, classes, or object literals. OOP allows us to create reusable and modular code, which can help to improve the maintainability and scalability of our applications. In this section, we will explore the basics of OOP in JavaScript, including how to create objects, define properties and methods, and use inheritance to share functionality between objects.

// There are concepts like encapsulation, polymorphism, inheritance, abstraction, etc. which are the core concepts of OOP. We will explore these concepts in detail in this section. We will also look at how to use classes in JavaScript, which is a more modern and convenient way to create objects and implement OOP principles. Classes provide a clear and concise syntax for defining constructor functions, methods, and inheritance, making it easier to work with objects in JavaScript.

// Prototype chain is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, every object has a prototype, which is another object that it inherits from. When we try to access a property or method on an object, JavaScript will first look for that property or method on the object itself. If it doesn't find it there, it will look for it on the object's prototype, and then on the prototype's prototype, and so on, until it reaches the end of the prototype chain. This allows us to create objects that share functionality and behavior, making our code more efficient and easier to maintain. An example of the prototype chain is when we create a new object using a constructor function. The new object will inherit properties and methods from the constructor function's prototype, which in turn may inherit from other objects in the prototype chain. This allows us to create complex objects with shared functionality, while still allowing for customization and flexibility.

// Example of prototype chain:
// 1. Base prototype object
const animal = {
  eats: true,
  walk() {
    return "Walking...";
  }
};

// 2. Middle prototype object (inherits from animal)
const dog = Object.create(animal);
dog.barks = true;  // here we are adding a new property to the dog object which is barks and we are setting it to true. This means that all objects that inherit from dog will have the barks property set to true. This is an example of how we can add new properties and methods to an object in the prototype chain, allowing us to create more specialized objects that share functionality with their parent objects.
dog.bark = function() {
  return "Woof!";
};

// 3. Final instance object (inherits from dog)
const myPuppy = Object.create(dog);
myPuppy.name = "Max";

// --- Testing the Prototype Chain Lookup ---

console.log(myPuppy.name);   // Output: "Max" (Found on myPuppy itself)
console.log(myPuppy.bark()); // Output: "Woof!" (Found on dog prototype)
console.log(myPuppy.eats);   // Output: true (Found on animal prototype)
console.log(myPuppy.color);  // Output: undefined (Not found anywhere, reached null)


// In this example, we have a base prototype object called animal, which has a property eats and a method walk. We then create a middle prototype object called dog that inherits from animal using Object.create(animal). The dog object has its own property barks and a method bark. Finally, we create an instance object called myPuppy that inherits from dog. The myPuppy object has its own property name. When we access properties or methods on myPuppy, JavaScript looks for them in the following order: myPuppy -> dog -> animal -> null. This demonstrates how the prototype chain works in JavaScript, allowing objects to inherit properties and methods from their prototypes.

// We can also show its example on Array:
Array.prototype.priyanshu = function() {
  return `This is a custom method added to the Array prototype by Priyanshu. And the array is: ${this}`;
  // here we use the this keyword to refer to the current array instance on which the method is called. The this keyword allows us to access the elements of the array and include them in the returned string. When we call myArray.priyanshu(), it will return a string that includes the elements of myArray, demonstrating how we can extend built-in objects like Array with our own custom methods.
}

let myArray = [1, 2, 3];
console.log(myArray.priyanshu()); // Output: "This is a custom method added to the Array prototype by Priyanshu. And the array is: 1,2,3";
// Now here the prototype chain for myArray is: myArray -> Array.prototype -> Object.prototype -> null. When we call myArray.priyanshu(), JavaScript first looks for the priyanshu method on myArray itself. Since it doesn't find it there, it looks for it on Array.prototype, where it finds the method we added. If it didn't find it there, it would continue looking up the prototype chain until it reached null. This demonstrates how we can extend built-in objects like Array with our own custom methods, and how the prototype chain allows us to share functionality between objects.
*/
// Now we will see how inheritance is done in JavaScript using classes. Inheritance allows us to create a new class that is based on an existing class, inheriting its properties and methods. This allows us to create more specialized classes that share functionality with their parent classes, while still allowing for customization and flexibility.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);