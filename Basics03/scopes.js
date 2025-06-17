
//out of the block value declaration is known as global scope 
//  global scope should be acceceble in block scope but block scope can't be accesseble globally

// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20 
    var c = 30 
    // console.log("INNER:", a);
}     // block scope

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Omm"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "Omm"
    if(username === "Omm"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);   //can't be access because of the object is of block scope
}

// console.log(username);   // can't access because of the object is of block scope

// **************interestin*****************


console.log(addone(5));

function addone(num){
    return num+1
}


addtwo(5)  //it shows error because the function is hold in a variable and the fucntion is not declared till now 
const addtwo = function(num){
    return num+2
}
