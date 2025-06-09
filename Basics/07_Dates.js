let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let mycreateddate = new Date(2023, 0, 23)  //month starts from 0 in javaScript
// let mycreateddate = new Date(2023, 0, 23, 5, 3) 
// let mycreateddate = new Date("2023-01-14") 
let mycreateddate = new Date("01-14-2025") 
// console.log(mycreateddate.toLocaleString());


let mytimestamp=Date.now()

// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());


newdate.toLocaleString('default',{
    weekday: "long",
})