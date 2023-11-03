let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));  // both works

const valueInNumbers =  Number(score);

// console.log(typeof(valueInNumbers));
// console.log(valueInNumbers);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "randomText" => true

let somenumber = 33;

let somenumberToString = String(somenumber);
console.log(somenumberToString);
console.log(typeof somenumberToString);