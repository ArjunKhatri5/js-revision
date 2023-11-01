const accountId = 112233;
let accountEmail = "test@gmail.com";
var accountPass = 12345;
accountCity = "kpg";
let accountState; // in case value is not currently available.

// accountId = 332211; constant value can't be changed.

/* var is not recommended due to some scope 
related issues, instead use let  */

accountEmail = "example@gmail.com";
accountPass = 54321;
accountCity = "Delhi";

console.log(accountId);

console.table([accountEmail, accountPass, accountCity, accountState]);