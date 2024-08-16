function SetUsername(username) {
  // complex DB
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("Lion", "lion@fb.com", "123");
console.log(chai);
