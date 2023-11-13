
const score = [0, 11, 22, 33, 44, 55];

const heros = ["Krish", "Shaktiman", "Hanuman", "Naruto"];

// console.log(score);
// console.log(score[2]);



// another way to declare aaray
const newArray = new Array(1, 2, 3, 4, 5);
// console.log(newArray);
// console.log(newArray[2]);





// ---------push()---------- inserting an item to the end of an array

const arjun = ["a", "r", "j", "u"];
// console.log(arjun);         // [ 'a', 'r', 'j', 'u' ]

arjun.push("n");
// console.log(arjun);         // [ 'a', 'r', 'j', 'u', 'n' ]


// ---------pop()---------- removing an item from the end of an array

arjun.pop();
// console.log(arjun);         //  ['a', 'r', 'j', 'u']



// unshift() insert an item to the front of an array       &   shift()  remove an item from the front of an array

arjun.unshift("a");
// console.log(arjun);             // [ 'a', 'a', 'r', 'j', 'u' ]

arjun.shift();
// console.log(arjun);             // ['a', 'r', 'j', 'u' ]



// ----------includes()------------

// console.log(arjun.includes("k"));               // false
// console.log(arjun.includes("a"));               // true

//---------------indexOf()--------------

// console.log(arjun.indexOf("j"));                 // 2


//-----------join()----------------------

const arjun2 = arjun.join();
// console.log(arjun);             
// console.log(typeof(arjun));

// console.log(arjun2);
// console.log(typeof(arjun2));





// --------Slice()------and-----Splice()--------

// slice doesnt includes last digit (range)
// splice includes last digit (range)

console.log("A - original array ", arjun);               // [ 'a', 'r', 'j', 'u' ]

const arjun3 = arjun.slice(1, 3);

console.log("Slice ", arjun3);                    // [ 'r', 'j' ]
console.log("B original array after slice ", arjun);               // [ 'a', 'r', 'j', 'u' ]


const arjun4 = arjun.splice(1, 3);
console.log("Splice ", arjun4);                    // [ 'r', 'j', 'u' ]
console.log("C - Original array after splice ", arjun);                     // [ 'a' ]




