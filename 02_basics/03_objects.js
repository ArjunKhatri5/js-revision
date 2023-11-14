// Singleton
// object.create

// object literals

const jsUser = {
    name: "Arjun",
    "full name": "Arjun Khatri",
    age: 21,
    location: "Dehradun",
    email: "arjun@gmail.com",
    loginDays: ['monday', 'Saturday']
}

// object is a key value pair
// the key can be either written direct or as a string. both way it takes it as a string
// the reason we sometimes prefer to write it as a string is because we can use spaces in the key name 
// for example: "full name" in above object



// --------access method
console.log(jsUser.location);           // Dehradun



// ------access method 2
/* the reason why we need to know this is because if the key (i.e., full name in this case ) 
inside object is written as a string, then there's no way to access them with above mentioned method */

console.log(jsUser["full name"]);



