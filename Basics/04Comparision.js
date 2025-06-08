// >,<,>=,<=,!=,==..............
console.log(null>0);
console.log(null == 0);
console.log(null>=0);
// An equality check == and comparision > < >= <= work differently.
// comparision converts null to a number, treating it as 0. that's why (3) null >= 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===  -> strict check-> it check if there is any difference in data type or not if there is any data type change in the both data then it shows false due to different datatype.

console.log("2"  === 2);
