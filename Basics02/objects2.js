// const tinderuser = new Object()
const tinderuser = {};

tinderuser.id = "1234abc";
tinderuser.name = "Omm prakash";
tinderuser.isLogedin = false;

// console.log(tinderuser);

const regularuser = {
    email: "omm@google.com",
    fullname: {
        userfullname: {
            firstname: "omm",
            lastname: "prakash"
        }
    }
}
console.log(regularuser.fullname.userfullname)

const obj1 = {}