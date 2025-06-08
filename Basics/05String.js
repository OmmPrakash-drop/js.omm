const name ="Omm"
const repo= 10

// console.log(name + repo + " Value"); oudated

// console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Omm-prakash-satapathy');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-3, 2);
console.log(anotherString);

const newString1 = "    omm      "
console.log(newString1)
console.log(newString1.trim());

const url="https://omm.com/omm%20prakash"
console.log(url.replace('%20', '_'));

console.log(url.includes('omm'));

console.log(gameName.split('-'));  //split based on the given term there it is
