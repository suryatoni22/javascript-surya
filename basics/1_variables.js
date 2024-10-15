const accountId = 97971
let accountEmail = "surya@google.com"
var accountPassword = "12345"
accountCity = "Jammu"  // this is not good way to define variable always use let
let accountDist;

// accountId=2 // not allowed

accountEmail = "ashish.com"
accountPassword = "33443"
accountCity= "samba"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountDist]);

/*
never use var prefer let
as it create problem in block scope and functions

*/