const promiseOne = new Promise(function (resolve, rejected) {
  // Do an async task
  // DB calls, cryptopgraphy, network
  setTimeout(function () {
    // console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log("Promise consumed");
});

new Promise(function (resolve, rejected) {
  setTimeout(function () {
    // console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    resolve({ username: "mudit", email: "mudit@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Mudit", pass: "123" });
    } else {
      rejected("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolve or rejected"));

const promiseFive = new Promise(function (resolve, rejected) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", pass: "123" });
    } else {
      rejected("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
