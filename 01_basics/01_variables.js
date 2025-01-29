const accountId = 134453
let accountEmail = "asdfvsd@gmail.com"
var accountPassword = "12345"
accountCity = "Bhopal"
let accountState

//accountId = 2; //not allowed
accountEmail = "jgngi@gmail.com"
accountPassword = "09876"
accountCity = "Bangaluru"

/**
 * prefer not to use var 
 * because of issues in block scope and functional scope
 */

// console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
