// const marvel = ["thor","ironman","spiderman"]
// const dc = ["superman", "flash", "batman"]

// marvel.push(dc)   //it just push the element in the same array, it consider the pushed array as a element inside which there may be multiple values

// console.log(marvel);
// console.log(marvel[3][1]);

// const allhero = marvel.concat(dc)  //concat create a new array to store all element
// console.log(allhero);

// spread

// const allnhero = [...marvel,...dc]  //this   the way how we use the spread we just have to use the ... beside the array to make it a spread in which all the element are stored inside a new array 
// console.log(allnhero);

// const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realanotherarray = anotherarray.flat(Infinity)  //flat makes the array which consist of array inside array make it in a single array 
// console.log(realanotherarray)


// console.log(Array.isArray("Omm"))// is it a array
// console.log(Array.from("Omm"))  //makes it a array
// console.log(Array.from({name: "Omm"}))  //interesting, don't show any value because it can't make it into an array

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3)); // makes all the values of these variables into array
