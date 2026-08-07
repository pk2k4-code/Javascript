// Closures in JavaScript are a fundamental concept that allows functions to access variables from their outer scope even after the outer function has finished executing. This is possible because functions in JavaScript form closures, which means they "close over" the variables from their surrounding context. To illustrate this concept, let's look at an example:

function outerFunction(outerVariable) {
    // This is the inner function that forms a closure
    function innerFunction(innerVariable) {
        // The inner function can access both its own variables and those from the outer function
        console.log(outerVariable);
        console.log(innerVariable);
    }

    return innerFunction;
}

let fn1 = outerFunction(33);
fn1(44); // This will log 33 and 44 to the console

 // Now what is happening in the above code is that we have a function called outerFunction which takes an argument called outerVariable, and inside this function we have another function called innerFunction which takes an argument called innerVariable, and inside this innerFunction we are logging both the outerVariable and the innerVariable to the console. Now when we call the outerFunction and pass a value to it, it returns the innerFunction, which we can then call with its own argument. This demonstrates how closures allow the inner function to access variables from its outer function even after the outer function has finished executing.


// Example 2: Using closures to create private variables

function createCounter() {
    let count = 0; // This variable is private to the createCounter function
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// In this example, when const counter = createCounter() is called, it returns the function to counter, and now counter stores like:
counter = function() {
        count++;
        return count;
    }
// Now everytime we call counter(), it has access to the county variable, and the count variable has not been destroyed yet as the inner function still has a reference to it, and this is how closures work.   