// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 = 1); 
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);       // Prints true
// console.log("02" > 1);      // Prints true


// console.log(true == 1);         // prints true
// console.log(true == 0);         // prints false


// ***********************Good to avoid such conversion, as they are complex to predict*********************************
// console.log(null = 0);           // Produce error
// console.log(null == 0);          // prints false
// console.log(null === 0);         // prints false
// console.log(null > 0);           // prints false
// console.log(null >= 0);             // prints true

/* euqlity (==) operator works differnt than comparision operator (>  <  >=  <=) in JS,
as comparision operator converts it into a number, hence converting null = 0.  
the same is not the case with "undefined" datatype, instead it will always be shown as False */
// ******************************************************************************************


// Strict check (===),, not just checks value but data type as well
// console.log("2" == 2);      // prints true
// console.log("2" === 2);    // prints false

// console.log(true == 2);         // false
// console.log(true == "2");       // false
// console.log(true == "0");       // false
// console.log(false == "0");       // true

// console.log(true == 1);         // true
// console.log(true == "1");         // true

// console.log(true === "1");         // false
// console.log(true === 1);         // false