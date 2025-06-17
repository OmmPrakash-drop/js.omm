
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

console.log(loginusermsg());

