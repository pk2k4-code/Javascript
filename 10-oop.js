// This section starts to deal with the concept of object-oriented programming (OOP) in JavaScript. OOP is a programming paradigm that is based on the concept of objects, which can contain data and methods. In JavaScript, we can create objects using constructor functions, classes, or object literals. OOP allows us to create reusable and modular code, which can help to improve the maintainability and scalability of our applications. In this section, we will explore the basics of OOP in JavaScript, including how to create objects, define properties and methods, and use inheritance to share functionality between objects.

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


// Now we will see how INHERITANCE is done in JavaScript using classes. Inheritance allows us to create a new class that is based on an existing class, inheriting its properties and methods. This allows us to create more specialized classes that share functionality with their parent classes, while still allowing for customization and flexibility.
class Vehicle {
  // here constructor is a special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created. The constructor method can take parameters, which can be used to initialize the properties of the object. In this example, we are using the constructor to initialize the make and model properties of the Vehicle class.
  constructor(make, model) {    
    this.make = make;
    this.model = model;
  }
  // Here above you can see that we have not declared the variables make and model using the var, let, or const keywords. This is because we are using the this keyword to refer to the current instance of the class, and we are assigning values to the properties of that instance. In JavaScript classes, we do not need to declare properties before using them in the constructor. When we assign a value to a property using this.propertyName, JavaScript automatically creates that property on the instance of the class. This is a feature of JavaScript classes that allows us to define properties on an object without having to declare them explicitly.

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  // here we write no constructor in the Car class because we want to use the constructor of the parent class Vehicle. If we don't write a constructor in the child class, JavaScript will automatically call the constructor of the parent class when we create a new instance of the child class. This allows us to inherit the properties and methods of the parent class without having to redefine them in the child class. And if there was no constructor in te parent class as well then what would happen is that the default constructor of the parent class would be called, which is an empty constructor that does not take any parameters. This means that if we create a new instance of the child class without defining a constructor in either the child or parent class, the default constructor of the parent class will be called, and the properties of the parent class will not be initialized. This can lead to unexpected behavior and errors in our code. Therefore, it is important to define a constructor in the parent class if we want to initialize its properties when creating instances of child classes.
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);

// In this example, we have a parent class called Vehicle that has a constructor method that initializes the make and model properties of the class. We then create a child class called Car that extends the Vehicle class, inheriting its properties and methods. The Car class has its own method called drive, which returns a string indicating that it is an inheritance example. When we create a new instance of the Car class, we pass in the make and model parameters to the constructor of the parent class, which initializes the properties of the Vehicle class. We can then call the start method on the myCar instance, which is inherited from the Vehicle class, and the drive method on the myCar instance, which is defined in the Car class. This demonstrates how we can use inheritance to create more specialized classes that share functionality with their parent classes, while still allowing for customization and flexibility.

// Inheritance can also be achieved using the prototype chain in JavaScript. When we create a new object using a constructor function, the new object inherits properties and methods from the constructor function's prototype. This allows us to create complex objects with shared functionality, while still allowing for customization and flexibility. For example:
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound.`;
}
let myAnimal = new Animal("Dog");
console.log(myAnimal.speak()); // Output: "Dog makes a sound."

// In this example, we have a constructor function called Animal that takes a name parameter and assigns it to the name property of the object. We then define a method called speak on the prototype of the Animal constructor function, which returns a string indicating that the animal makes a sound. When we create a new instance of the Animal constructor function using the new keyword, the new object inherits the speak method from the prototype of the Animal constructor function. This demonstrates how we can use the prototype chain to achieve inheritance in JavaScript, allowing us to create complex objects with shared functionality, while still allowing for customization and flexibility.

// Inheritance can also be achieved using the Object.create() method in JavaScript. The Object.create() method creates a new object with the specified prototype object and properties. This allows us to create complex objects with shared functionality, while still allowing for customization and flexibility. For example:
const animalProto = {
  speak() {
    return `${this.name} makes a sound.`;
  }
};
let myAnimal = Object.create(animalProto);
myAnimal.name = "Dog";
console.log(myAnimal.speak()); // Output: "Dog makes a sound."

// In this example, we have a prototype object called animalProto that has a method called speak. We then create a new object called myAnimal using the Object.create() method, passing in the animalProto object as the prototype. We assign a name property to the myAnimal object, and when we call the speak method on the myAnimal object, it inherits the method from the animalProto object. This demonstrates how we can use the Object.create() method to achieve inheritance in JavaScript, allowing us to create complex objects with shared functionality, while still allowing for customization and flexibility.

// To access the properties and methods of a parent class from a child class, we can use the super keyword in JavaScript. The super keyword refers to the parent class and allows us to call its constructor and methods from the child class. This allows us to extend the functionality of the parent class while still maintaining access to its properties and methods. For example:
class Parent {
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the constructor of the parent class to initialize the name property
    this.age = age; // Initialize the age property of the child class
  }
}


// Now we will see how ENCAPSULATION is done in JavaScript using classes. Encapsulation is the concept of hiding the internal state and behavior of an object and only exposing a public interface. This allows us to control access to the object's properties and methods, preventing external code from directly modifying them. In JavaScript, we can achieve encapsulation using private fields and methods, which are denoted by a # prefix. Private fields and methods can only be accessed within the class they are defined in, and cannot be accessed from outside the class.
class BankAccount {
  #balance; // private field
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {  // this is a public method that allows us to access the private field #balance from outside the class. It returns the current balance of the bank account.
    return this.#balance;
  }
}

let myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
// console.log(myAccount.#balance); // This will throw an error because #balance is a private field and cannot be accessed from outside the class. This demonstrates how encapsulation allows us to control access to the internal state of an object, preventing external code from directly modifying it. 


// Now we will talk about ABSTRACTION in JavaScript using classes. Abstraction is the concept of hiding the implementation details of an object and only exposing the essential features. This allows us to create a simplified interface for interacting with the object, while hiding the complexity of its internal workings. In JavaScript, we can achieve abstraction using abstract classes and methods, which are classes and methods that cannot be instantiated or called directly, but must be implemented by subclasses.
// However, JavaScript does not have built-in support for abstract classes and methods like some other programming languages. Instead, we can simulate abstraction using regular classes and methods, and throwing errors when an abstract method is called directly. For example:
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  getArea() {
    throw new Error("Method 'getArea' must be implemented by subclass");
  }
}

// One more example is:
class CoffeeMachine {
    makeCoffee() {
        this.#boilWater();
        this.#brewCoffee();
        return "Coffee is ready!";
    }

    #boilWater() {
        console.log("Boiling water...");
    }

    #brewCoffee() {
        console.log("Brewing coffee...");
    }
}
// Here the methods boilwater and brewcoffee are not exposed


// Now we will talk about POLYMORPHISM in JavaScript using classes. Polymorphism is the concept of using a single interface to represent different types of objects. This allows us to write code that can work with different types of objects, while still maintaining a consistent interface. In JavaScript, we can achieve polymorphism using method overriding, which is the ability of a subclass to provide a different implementation of a method that is already defined in its parent class.
class Animal {
  makeSound() {
    return "Some generic animal sound";
  }
}
class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}
class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}
let myDog = new Dog();
let myCat = new Cat();
console.log(myDog.makeSound()); // Output: "Woof!"
console.log(myCat.makeSound()); // Output: "Meow!"

// In this example, we have a parent class called Animal that has a method called makeSound. We then create two subclasses called Dog and Cat that override the makeSound method with their own implementations. When we call the makeSound method on an instance of Dog or Cat, JavaScript will use the overridden method defined in the subclass, allowing us to achieve polymorphism. This demonstrates how we can use a single interface (the makeSound method) to represent different types of objects (Dog and Cat), while still maintaining a consistent interface.

// Static methods are methods that belong to the class itself, rather than to instances of the class. This means that we can call a static method directly on the class, without having to create an instance of the class first. In JavaScript, we can define static methods using the static keyword. Static methods are often used for utility functions or for functionality that is not specific to any particular instance of the class.
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2
console.log(MathUtils.multiply(5, 3)); // Output: 15
console.log(MathUtils.divide(5, 3)); // Output: 1.6666666666666667

// Now if we make an instance of MathUtils and try to call the static methods on that instance, we will get an error:
let mathUtilsInstance = new MathUtils();
console.log(mathUtilsInstance.add(5, 3)); // This will throw an error because add is a static method and cannot be called on an instance of the class.

// In this example, we have a class called MathUtils that has four static methods: add, subtract, multiply, and divide. We can call these methods directly on the MathUtils class, without having to create an instance of the class first. This demonstrates how we can use static methods to provide utility functions or functionality that is not specific to any particular instance of the class.
// Now we will talk about the difference between instance methods and static methods in JavaScript. Instance methods are methods that belong to instances of a class, while static methods belong to the class itself. This means that we can call an instance method on an instance of a class, while we can call a static method directly on the class itself. In general, instance methods are used for functionality that is specific to a particular instance of a class, while static methods are used for functionality that is not specific to any particular instance of a class.

// Getters and Setters - The getter and setter methods are used to define properties on an object that can be accessed and modified like regular properties, but with additional logic for getting and setting their values. In JavaScript, we can define getter and setter methods using the get and set keywords. Getters allow us to define a method that is called when we access a property, while setters allow us to define a method that is called when we assign a value to a property. This allows us to add additional logic for getting and setting property values, such as validation or transformation of the data.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');  // 
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// Object destructuring is a feature in JavaScript that allows us to extract values from objects and assign them to variables in a more concise and readable way. We can use object destructuring in conjunction with getters and setters to simplify the process of getting and setting property values on an object. For example, we can use object destructuring to extract the firstName and lastName properties from a Person object, and then use those values to set the fullName property using the setter method.
let person = new Person("John", "Doe");
console.log(person.fullName); // Output: "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: "Jane"
console.log(person.lastName); // Output: "Smith"

// In this example, we have a class called Person that has two properties: firstName and lastName. We define a getter method called fullName that returns the full name of the person by concatenating the firstName and lastName properties. We also define a setter method called fullName that takes a value and splits it into firstName and lastName using object destructuring. When we access the fullName property, the getter method is called, and when we assign a value to the fullName property, the setter method is called. This demonstrates how we can use getters and setters to define properties on an object that can be accessed and modified like regular properties, but with additional logic for getting and setting their values.

// One more example of getters and setters is:
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    // This is a simple example; in a real application, you might want to handle the case where only one dimension is changed
    this.width = Math.sqrt(value);
    this.height = Math.sqrt(value);
  }
}

// A more complex example of getters and setters is:
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

let circle = new Circle(5);
console.log(circle.area); // Output: 78.53981633974483
circle.area = 100;
console.log(circle.radius); // Output: 5.641895835477563

