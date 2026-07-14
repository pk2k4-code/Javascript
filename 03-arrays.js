// This section deals with various concepts of arrays in JavaScript. Arrays are a special type of object that can hold multiple values in a single variable. They are ordered collections of values, which can be of any type, but we should usually keep them homogeneous. Arrays are created using square brackets []. Their size is not fixed here in Javascript.

// Declaring an array
let arr = [];
arr = [apple, banana];


// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry


// Adding elements to end of an array
fruits.push("Date"); // Adds "Date" to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]


// Removing elements from end of an array
fruits.pop(); // Removes the last element ("Date") from the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// Adding elements to the beginning of an array
fruits.unshift("Elderberry", 'Orange'); // Adds "Elderberry" and "Orange" to the beginning of the array
console.log(fruits); // Output: ["Elderberry", "Orange", "Apple", "Banana", "Cherry"]


// Removing elements from the beginning of an array
fruits.shift(); // Removes the first element ("Elderberry") from the array
console.log(fruits); // Output: ["Orange", "Apple", "Banana", "Cherry"]


// While these shifting and unshifting operations are possible, they are not recommended for large arrays as they can be inefficient. This is because when we add or remove elements from the beginning of an array, all the other elements have to be re-indexed, which can take time. Instead, it is better to use push() and pop() methods to add or remove elements from the end of an array, as they are more efficient. If we need to add or remove elements from the beginning of an array frequently, we can use a different data structure like a linked list or a deque (double-ended queue) which allows for efficient insertion and deletion at both ends.

// Iterating over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: Orange, Apple, Banana, Cherry
}


// Copying an array
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let citiesCopy = cities;
console.log(citiesCopy); // Output: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
cities.pop();
console.log(cities); // Output: ["New York", "Los Angeles", "Chicago", "Houston"]
console.log(citiesCopy); // Output: ["New York", "Los Angeles", "Chicago", "Houston"] - This is because citiesCopy is a reference to the same array in memory, not a separate copy.
// To create a shallow copy of an array, we can use the slice() method. The slice() method returns a new array that is a shallow copy of a portion of the original array. It takes two arguments: the starting index (inclusive) and the ending index (exclusive). If no arguments are provided, it copies the entire array. Also we can use the spread operator (...) to create a shallow copy of an array. The spread operator allows us to expand the elements of an array into individual elements. We can use it to create a new array that contains all the elements of the original array. For example, let fruitsCopy = [...fruits]; will create a shallow copy of the fruits array.
let citiesCopy1 = cities.slice(); // Creates a shallow copy of the entire array
cities.pop();
console.log(cities); // Output: ["New York", "Los Angeles", "Chicago"]
console.log(citiesCopy1); // Output: ["New York", "Los Angeles", "Chicago", "Houston"]
let citiesCopy2 = cities.slice(1, 3); // Creates a shallow copy of the array from index 1 to 2
console.log(citiesCopy2); // Output: ["Los Angeles", "Chicago"]
let citiesCopy3 = [...cities]; // Creates a shallow copy of the entire array using the spread operator
console.log(citiesCopy3); // Output: ["New York", "Los Angeles", "Chicago"]


// Merging arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// Checking if a value exists in an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(6)); // Output: false
// Remember that the includes() method checks for the presence of a value in an array and returns true if the value is found, and false otherwise. It uses strict equality (===) for comparison, so it will not perform type coercion. For example, numbers.includes("3") will return false because "3" is a string and 3 is a number.


// Finding the index of a value in an array
let index = numbers.indexOf(3);
console.log(index); // Output: 2
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. It also uses strict equality (===) for comparison, so it will not perform type coercion. For example, numbers.indexOf("3") will return -1 because "3" is a string and 3 is a number.


// Reversing an array
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]


// To remove the first element ofan array, we can use the shift() method. The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let shiftedElement = numbers.shift();
console.log(shiftedElement); // Output: 5
console.log(numbers); // Output: [4, 3, 2, 1]

