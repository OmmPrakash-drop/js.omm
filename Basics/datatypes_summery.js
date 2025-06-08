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

// =============================memory========================================

// two type of memory are there 
// stack (primitive)(copy of data), heap (Non Primitive)(reference of data)

let myName = "Omm"
let anotherName = myName
anotherName = "Raja"

console.log(myName);
console.log(anotherName);
// here it is a primitive data type which provides a copy during referencing the data, there for the change occures in the copy not in the original data.
let userOne ={
    email: "omm@hii",
    upi: "omm@ybl"
}

let userTwo = userOne;

userTwo.email = "omm@code"

console.log(userOne.email);
console.log(userTwo.email);
// here it is a nonprimitive data type which is heap, during referencing it basically provides the original data which will change during any change in the referenced datatype.