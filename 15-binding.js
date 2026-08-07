// Here we are going to study how to bind a function to an object in JavaScript. The bind() method creates a new function that, when called, has its this keyword set to the provided value. This is useful when we want to ensure that a function is always called with a specific context.

// Example 1: Binding a function to an object

const person = {
  name: "Alice",
  age: 30
};

function greet() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// Bind the function to the person object
const boundGreet = greet.bind(person);
boundGreet(); // Output: Hello, my name is Alice and I am 30 years old.

// Example 2: Binding a function with arguments

function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
}

// Bind the function to the person object and provide an argument
const boundIntroduce = introduce.bind(person, "Hi there");
boundIntroduce(); // Output: Hi there, my name is Alice and I am 30 years old.


// Example 3:

const person2 = {
  name: "Hitesh",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person2.greet();   // Output: Hi, I am Hitesh

const greetFunction = person2.greet;
greetFunction();  // Output: Hi, I am undefined (because 'this' is not bound to the person object)

const boundGreet = person2.greet.bind({ name: "John" });
boundGreet();    // Output: Hi, I am John (because 'this' is now bound to the new object with name "John")


// call is another method which is used to call a function with a specific this value and arguments provided individually. The call() method allows us to invoke a function and explicitly set the this context for that function. It takes the first argument as the value to be used as this, followed by any additional arguments that the function requires.

// for example:

const person3 = {
  name: "Alice",
  age: 30
};

function greet2(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old${punctuation}`);
}

greet2.call(person3, "Hello", "!"); // Output: Hello, my name is Alice and I am 30 years old!

// here , we have an object person3 with properties name and age. We also have a function greet2 that takes two parameters: greeting and punctuation. When we call greet2 using the call() method, we pass person3 as the first argument, which sets the this context to person3. The subsequent arguments "Hello" and "!" are passed to the greet2 function as its parameters. As a result, the output is: Hello, my name is Alice and I am 30 years old!


// apply is another method which is used to call a function with a specific this value and arguments provided as an array (or an array-like object). The apply() method is similar to the call() method, but instead of passing arguments individually, we pass them as an array. This can be useful when we have a variable number of arguments or when we want to pass an array directly to a function.

// for example:

const person4 = {
  name: "Bob",
  age: 25
};

function greet3(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old${punctuation}`);
}

greet3.apply(person4, ["Hi", "!"]); // Output: Hi, my name is Bob and I am 25 years old!    

// here , we have an object person4 with properties name and age. We also have a function greet3 that takes two parameters: greeting and punctuation. When we call greet3 using the apply() method, we pass person4 as the first argument, which sets the this context to person4. The second argument is an array ["Hi", "!"], which contains the values for the greeting and punctuation parameters of the greet3 function. As a result, the output is: Hi, my name is Bob and I am 25 years old!

