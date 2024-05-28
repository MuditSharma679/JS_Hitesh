const accountId = 14465;
let accountEmail = "Mudit@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; //not allowed

accountEmail = "harshu@google.com";
accountPassword = "212526";
accountCity = "Jhalawar";
console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope.
*/
console.log(accountEmail);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
