class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const lion = new User("Lion");
// console.log(lion.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const data = new User("Ram", "ram@sita");
data.logMe();
