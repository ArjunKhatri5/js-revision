const score = 400;

const scoreNew = new Number(300);

// console.log(scoreNew);              //[Number: 300]
// console.log(typeof(scoreNew));                  //object
// console.log(typeof(scoreNew.toString()));           // string


// ----------toFixed()----------
// console.log(scoreNew.toFixed(2));           // prints 100.00

const value = 23.77878;
// console.log(value.toFixed(3));              // 23.779



//----------toPrecision()----------
// console.log(value.toPrecision(3));              // 23.8
// console.log(value.toPrecision(2));              // 24

const value2 = 23.1;
// console.log(value2.toPrecision(2));             // 23


//----------toLocalString()
const balance = 1000000;
// console.log(balance.toLocaleString());              // prints value in US standard                   i.e., 1,000,000
// console.log(balance.toLocaleString('en-IN'));              // prints value in Indian standard        i.e, 10,00,000




//===================Maths===============================

const num = -12;
// -----Math.abs()       converts negative value to positive
// console.log(Math.abs(num));          // 12

//------Math.round        
const num2 = 23.7;
const num3 = 23.3;

// console.log("num 2 round off is: ", Math.round(num2));          //24
// console.log("num 3 round off is: ", Math.round(num3));          //23


// Math.ceil()          (always choose uppar value)
// console.log("ceil of num2: ", Math.ceil(num2));                 //24
// console.log("ceil of num3: ", Math.ceil(num3));                 // 24

// Math.floor()         (always choose lower value)
// console.log("floor of num2: ", Math.floor(num2));                   //23
// console.log("floor of num3: ", Math.floor(num3));                   //23


//Math.min()  and Math.max()

// console.log(Math.max(0, 2 ,4, 6, 8));       // 8
// console.log(Math.min(0, 2 ,4, 6, 8));       // 0

// Math.random()

// console.log(Math.random());      // prints random number between 0 - 0.9

let randomNum = Math.random();
let randomfrom1to10 = randomNum * 10;           // 0-9
randomfrom1to10 = Math.floor(randomfrom1to10);
// console.log(randomfrom1to10);



const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (((max - min) + 1) + 10)));      // prints value from 11-20