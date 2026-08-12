// The asynchronous nature of JavaScript allows us to perform tasks without blocking the main thread. This is particularly useful for operations that take time, such as fetching data from an API or reading files. In this example, we will demonstrate how to use asynchronous functions and promises to handle such tasks.

// Example 1:

function simulateAsyncTask() {
  console.log('Task started');
  setTimeout(() => {
    console.log('Task finished');
  }, 2000);
}

simulateAsyncTask();


// Example 2: Using setTimeout to simulate an asynchronous operation

function greet() {
    console.log("Hello! It's me");
}

setTimeout( () => {
    greet();
}, 4000);

console.log("Program started");
for(let i = 0; i<7; i++){
    console.log(i);
}

// Example 3:

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
    }, 2000);
}
fetchDataWithCallback((data) => {
    console.log(data);
});