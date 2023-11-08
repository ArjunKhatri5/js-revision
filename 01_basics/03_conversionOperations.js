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
// console.log(somenumberToString);
// console.log(typeof somenumberToString);


// **********Operations*****************

let value = 100;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello ";
let str2 = "Arjun";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);               // prints 12
// console.log(1 + "2");               // prints 12
// console.log("1" + "2");             // prints 12
// console.log("1" + 2 + 2);           // prints 122
// console.log(1 + 2 + "2");           // prints 32
// console.log(1 + (2 + "2"));           // prints 122


// console.log(true);      // prints true
// console.log(+true);      // prints 1
// console.log(true+);      // shows error


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);           // prints 101

console.log(gameCounter++);         // still prints 101 but increments the value for after print (for next line)
console.log(gameCounter);           // prints 102

console.log(++gameCounter);         // prints 103, since increment first, prints later
