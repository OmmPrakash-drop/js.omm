
// in js array are resizable
// shallow copuy = shares the same reference
// deep copy don't share original copy

const myarray = [0,1,2,3,4,5,6]
const myheroes = ["baba", "mama"]

const myarray2 = new Array(1,2,3,4)
console.log(myarray[1]);
// array methods

// myarray.push(6)
// console.log(myarray)

// myarray.push(7)
// console.log(myarray)
// myarray.pop()

// myarray.unshift(0) //add element inside braces on front
// myarray.shift(0) //shift/delete element from front

// console.log(myarray.includes(1));  //is the array includes the value inside the parenthesis
// console.log(myarray.indexOf(3));    //shows the index of the value inside the parenthesis

// const newarray = myarray.join();  //joins all the element into a string/ change the type into string
// console.log(newarray)
// console.log(typeof newarray);

// console.log(myn1);
// console.log(myarray)  //pop the last element

// slice, splice
console.log("A", myarray)

const myn1= myarray.slice(1, 3)  //print the index positions only exclude last position of the given value inside the parenthesis, here 3rd position is not going to be print

console.log(myn1);
console.log("B",myarray);

const myn2= myarray.splice(1, 3) //exclue the index positions 1 to 3
console.log("c",myarray);
console.log(myn2);

