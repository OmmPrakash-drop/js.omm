// const marvel = ["thor","ironman","spiderman"]
// const dc = ["superman", "flash", "batman"]

// marvel.push(dc)   //it just push the element in the same array

// console.log(marvel);
// console.log(marvel[3][1]);

// const allhero = marvel.concat(dc)  //concat create a new array to store all element
// console.log(allhero);

// spread

// const allnhero = [...marvel,...dc]
// console.log(allnhero);

const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray)


console.log(Array.isArray("Omm"))
console.log(Array.from("Omm"))
console.log(Array.from({name: "Omm"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
