// singleton
// Object.create
// = is ussed to retrieve and : is used to asign 
// object literals

const mysym= Symbol("key1")

const jsuser ={
    name: "Omm",
    "Full name": "Omm Prakash",
    [mysym]: "mykey1",  //to assign an symbol then we have to make the key inside the square braces.
    age: 19,
    locatioon: "odisha",
    email: "omm@assus.com",
    isloggedin: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])    //first keys are used as strings so we have to acces them using the double collens
// console.log(jsuser["Full name"])    // we can't retrieve the value of full name withought square notation 
// console.log(jsuser.mysym);   
// console.log(typeof jsuser[mysym])
// console.log(typeof jsuser[mysym]);
// to assign a symbol we have to assign the value inside the function in square braces and also we have to retrieve it by the use of square notations.

// jsuser.email = "omm@gmail.com"
// Object.freeze(jsuser)   // we have to use the freez keywork in a object then we have to assign the object inside parenthsis to do the freez or commit in the object
// jsuser.email = "omm@gmai.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello");
}

jsuser.greetingtwo = function(){
    console.log(`Hello,  ${this.name}`);  //strign interpulation
}

console.log(jsuser.greeting());  // withought bracket after the funcstion call it only defines the reference not executed at all, after using the parenthesis it shows the value inside the function
console.log(jsuser.greetingtwo());
