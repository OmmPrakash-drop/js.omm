// Primitive
    // 7 types
        /* string, Number, Boolean, null, undefinied, Symbol, BigInt 
        */
    const score = 100
    const scoreValue = 100

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id === anotherId);

    // const bigNumber = 346534567845679876789n
    
// Reference type or Non Primitive
/* array, objects, functions */

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "omm",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);