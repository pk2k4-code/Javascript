// async/await is a syntactic sugar built on top of Promises, which allows us to write asynchronous code in a more synchronous and readable manner. It makes it easier to work with Promises by allowing us to use the await keyword to pause the execution of an async function until a Promise is resolved or rejected. This can help avoid callback hell and make our code cleaner and easier to understand.


function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
// to use await in a function, we need to declare the function as async. The async keyword is used to define an asynchronous function, which returns a Promise. Inside an async function, we can use the await keyword to pause the execution of the function until a Promise is resolved or rejected. This allows us to write asynchronous code in a more synchronous and readable manner.