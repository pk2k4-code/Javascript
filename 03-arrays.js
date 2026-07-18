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


// To remove the first element of an array, we can use the shift() method. The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
let shiftedElement = numbers.shift();
console.log(shiftedElement); // Output: 5
console.log(numbers); // Output: [4, 3, 2, 1]

// Nested arrays are arrays that contain other arrays as elements. They can be used to represent multi-dimensional data structures, such as matrices or grids. We can access the elements of a nested array using multiple indices, one for each level of nesting. For example, if we have a nested array called matrix, we can access the element in the second row and third column using matrix[1][2]. We can also use loops to iterate over the elements of a nested array, using nested loops for each level of nesting. For example, we can use a for loop to iterate over the rows of a matrix, and another for loop inside it to iterate over the columns of each row.
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][2]); // Output: 6

// Some important functions of arrays are:
// To find the maximum in an array, we can use the Math.max() function along with the spread operator. For example, let max = Math.max(...numbers); will give us the maximum value in the numbers array. Similarly, to find the minimum in an array, we can use the Math.min() function along with the spread operator. For example, let min = Math.min(...numbers); will give us the minimum value in the numbers array.
// To sort an array in ascending order, we can use the sort() method. For example, numbers.sort((a, b) => a - b); will sort the numbers array in ascending order. To sort an array in descending order, we can use the sort() method with a different comparison function. For example, numbers.sort((a, b) => b - a); will sort the numbers array in descending order.
// To remove duplicates from an array we can use the Set object along with the spread operator. For example, let uniqueNumbers = [...new Set(numbers)]; will give us an array of unique values from the numbers array.
// To flatten a nested array, we can use the flat() method. For example, let flattenedArray = matrix.flat(); will give us a one-dimensional array containing all the elements of the matrix array. We can also specify the depth of flattening by passing an argument to the flat() method. For example, let flattenedArray = nestedArray.flat(2); will flatten the nestedArray up to a depth of 2. Here depth is the number of levels of nesting to flatten. The default depth is 1, which means that only the first level of nesting will be flattened. If we want to flatten all levels of nesting, we can pass Infinity as the argument to the flat() method. For example, let flattenedArray = nestedArray.flat(Infinity); will flatten the nestedArray completely, regardless of how many levels of nesting it has.
// To filter an array based on a condition, we can use the filter() method. For example, let evenNumbers = numbers.filter(num => num % 2 === 0); will give us an array of even numbers from the numbers array. The filter() method creates a new array with all elements that pass the test implemented by the provided function. The provided function should return true for elements that should be included in the new array, and false for elements that should be excluded. Also just like that if we want to only take the elements from a mixed array of the number datatype then we can use the filter() method along with the typeof operator. For example, let numbersOnly = mixedArray.filter(element => typeof element === 'number'); will give us an array of only the number elements from the mixedArray. 