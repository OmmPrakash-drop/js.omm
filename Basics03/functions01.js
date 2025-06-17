
function saymyname(){
    console.log("O");
    console.log("m");
    console.log("m");
    console.log("p");
    console.log("r");
}

//saymyname()

// function addtwonum(num1, num2){
//     console.log(num1 + num2);
// }
// addtwonum(3, null)


function addtwonum(num1, num2){
    let sum = num1 + num2;
    return sum;
    // return num1 + num2
}
const result = addtwonum(2,3);

// console.log("Result: ", result);

function loginusermsg(username = "sam") {
    if (!username) {
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermsg("omm"));

// console.log(loginusermsg());

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500))

const user = {
    username: "omm",
    price: 199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [200,400,100,600]));
