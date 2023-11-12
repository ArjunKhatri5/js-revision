let date1 = new Date();

// console.log(date1);

// console.log(date1.toString());
// console.log(date1.toDateString());

// console.log(date1.toISOString());
// console.log(date1.toJSON());

// console.log(date1.toLocaleDateString());
// console.log(date1.toLocaleString());

// console.log(typeof date1);          // object


// new Date(year,month,day,hours,minutes,seconds,ms)

// console.log(new Date(2002, 3, 5, 10, 30, 59, 10).toDateString());
// console.log(new Date(2002, 3, 5, 10, 30, 59, 10).toLocaleString());


//--------------------------------------------------------------------------------------------------------

let myCreatedDate = new Date(2023, 1, 15);
// console.log(myCreatedDate);

console.log(myCreatedDate.getTime());           // prints date in millisecond starting from the given date 

let dateNow = Date.now();
// console.log(dateNow);                           // prints time in millisecond from circa 1970 
// console.log(Date.now()/1000);                   // convert milliseconds into seconds

//--------------------------------------------------------------------------------------------------------------------

let newDate = new Date();
console.log(newDate.getDay());              // 0 = sunday
console.log(newDate.getMonth());            // 0 = january
console.log(newDate.getFullYear());
console.log(newDate.getHours());





