// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A Promise can be in one of three states: pending, fulfilled, or rejected.
// In this example, we will create a simple Promise that simulates fetching data from an API. The Promise will resolve successfully after a delay, and we will handle the resolved value using the .then() method. We will also demonstrate how to handle errors using the .catch() method, by setting success to true and false to see how the Promise behaves in both scenarios.


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);  // here 3000 is the time in milliseconds after which the promise will be resolved or rejected
  });
}

fetchData()
  .then((data) => {             // if resolve executes in promise then .then method called and here data is the parameter which is the value passed in resolve function -> "Data fetched successfully"
    console.log(data);
    return data.toLowerCase();          // this passes the value to the next .then method, which is the value of data.toLowerCase() -> "data fetched successfully"
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
