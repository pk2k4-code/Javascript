// This section deals with the concept of constructor functions in JavaScript. Constructor functions are special functions that are used to create and initialize objects. They are typically defined with a capitalized name to distinguish them from regular functions. When a constructor function is called with the new keyword, it creates a new object and sets the this keyword to refer to that object. The properties and methods defined within the constructor function are then added to the new object.

// Example 1:
function Person(name, age, gender) {
    this.name = name;    // here the use of this keyword refers to the new object being created. It allows us to set the properties of the new object based on the parameters passed to the constructor function.
    this.age = age;
    this.gender = gender;
}

// Creating a new object using the Person constructor function
let john = new Person("John", 30, "male");
console.log(john); // This will give us the john object with its properties name, age and   gender. Its output will be { name: 'John', age: 30, gender: 'male' }

// Example 2:
function Car(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
}

// Creating a new object using the Car constructor function
let myCar = new Car("Toyota", "blue", 25000);
console.log(myCar); // This will give us the myCar object with its properties model, color and price. Its output will be { model: 'Toyota', color: 'blue', price: 25000 }

// Example 3:
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

// Creating a new object using the Animal constructor function
let dog = new Animal("Dog", "Bark");
console.log(dog); // This will give us the dog object with its properties type and sound. Its output will be { type: 'Dog', sound: 'Bark' }

// Example 4:
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // we can also add methods to the constructor function. For example, we can add a method getSummary to the Book constructor function that returns a summary of the book.
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

// Creating a new object using the Book constructor function
let myBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(myBook.getSummary()); // This will give us the summary of the book. Its output will be "To Kill a Mockingbird was written by Harper Lee in 1960."

// Example 5:
function Laptop(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

// Adding a method to the Laptop constructor function using its prototype. This allows all instances of Laptop to share the same method, rather than each instance having its own copy of the method. The difference between adding a method directly to the constructor function and adding it to the prototype is that when we add a method directly to the constructor function, each instance of the object will have its own copy of the method, which can lead to increased memory usage. When we add a method to the prototype, all instances of the object share the same method, which can lead to reduced memory usage.
Laptop.prototype.getDetails = function() {
    return `${this.brand} ${this.model} costs $${this.price}.`;
}

// Creating a new object using the Laptop constructor function
let myLaptop = new Laptop("Dell", "XPS 13", 1200);
console.log(myLaptop.getDetails()); // This will give us the details of the laptop. Its output will be "Dell XPS 13 costs $1200."


// If we want to create a new object that inherits from another object, we can use the Object.create() method. This allows us to create a new object with the specified prototype object and properties. For example, if we have a constructor function Person and we want to create a new object john that inherits from Person, we can do it like this:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating a new object using the Person constructor function
let john = new Person("John", 30);
console.log(john); // This will give us the john object with its properties name and age. Its output will be { name: 'John', age: 30 }

// Now we can create a new object that inherits from john using Object.create() method. This allows us to create a new object with john as its prototype. For example, we can create a new object jane that inherits from john like this:
let jane = Object.create(john);
jane.name = "Jane";
jane.age = 25;
console.log(jane); // This will give us the jane object with its properties name and age. Its output will be { name: 'Jane', age: 25 }


// We can also use the instanceof operator to check if an object is an instance of a particular constructor function or class. For example, if we have a constructor function Person and we create a new object john using the new keyword like this: let john = new Person("John", 30); then we can check if john is an instance of Person like this: console.log(john instanceof Person); // This will give us true because john is an instance of Person. We can also check if john is an instance of Object like this: console.log(john instanceof Object); // This will give us true because all objects in JavaScript inherit from Object.


// We can also check if an object is made using the new keyword by checking if its constructor property is equal to the constructor function. For example, if we have a constructor function Person and we create a new object john using the new keyword like this: let john = new Person("John", 30); then we can check if john is made using the new keyword like this: console.log(john.constructor === Person); // This will give us true because john is made using the new keyword and its constructor property is equal to the Person constructor function. We can also check if john is made using the Object constructor function like this: console.log(john.constructor === Object); // This will give us false because john is not made using the Object constructor function.
// Another way of checking this is by using new.target property. The new.target property is a special property that is only available inside constructor functions. It allows us to check if a function was called using the new keyword or not. If a function is called using the new keyword, the new.target property will be equal to the constructor function. If a function is called without the new keyword, the new.target property will be undefined. For example, if we have a constructor function Person and we create a new object john using the new keyword like this: let john = new Person("John", 30); then we can check if john is made using the new keyword like this: console.log(new.target === Person); // This will give us true because john is made using the new keyword and its constructor property is equal to the Person constructor function. We can also check if john is made using the Object constructor function like this: console.log(new.target === Object); // This will give us false because john is not made using the Object constructor function.
// Also we can throw an error if the constructor function is called without the new keyword. For example, we can modify the Person constructor function like this:
function Person(name, age) {
    if (!new.target) {
        throw new Error("Person must be called with the new keyword");
    }
    this.name = name;
    this.age = age;
}

// Now if we try to create a new object john without using the new keyword like this: let john = Person("John", 30); then we will get an error saying "Person must be called with the new keyword". This is a good practice to ensure that constructor functions are always called with the new keyword, which helps to avoid unexpected behavior and bugs in our code.