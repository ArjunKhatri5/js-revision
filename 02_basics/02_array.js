const marvel = ["Spider-man", "Thor", "Iron-man"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)
// console.log(marvel);            //[ 'Spider-man', 'Thor', 'Iron-man', [ 'Superman', 'Flash', 'Batman' ] ]

// console.log(marvel[3]);             // [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel[3][1]);          // Flash





// ---------concat()-----------------

const newMarvel = marvel.concat(dc);
// console.log("result of concat: ", newMarvel);                 //[ 'Spider-man', 'Thor', 'Iron-man', 'Superman', 'Flash', 'Batman' ]







// -------------------spread operator-------------------

const newMarvel2 = [...marvel, ...dc];
// console.log("result of spread operator: ", newMarvel2);             // [ 'Spider-man', 'Thor', 'Iron-man', 'Superman', 'Flash', 'Batman' ]








// --------------------------flat()----------------------
const newestArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const newestArrayFlat = newestArray.flat(Infinity);

// console.log(newestArray);
// console.log(newestArrayFlat);








// console.log(Array.isArray(marvel));                 // true

const name = "Arjun";

// console.log(Array.isArray(name));                // false
// console.log(Array.from("Arjun"));                   // [ 'A', 'r', 'j', 'u', 'n' ]

// object
// console.log(Array.from({name: "Arjun"}));               // empty array



// array.of()       - same as from 
const one = 100;
const two = 200;
const three = 300;

// console.log(Array.of(one, two , three));             // [ 100, 200, 300 ]