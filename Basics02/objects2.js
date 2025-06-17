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
// console.log(regularuser.fullname.userfullname)

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
// const obj3 = { obj1, obj2 }


// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 ={...obj1, ...obj2}
// console.log(obj3);


const users =[
    {
        id: 1,
        email: "omm@gmail.com"
    },
    {
        id: 1,
        email: "omm@gmail.com"
    },
    {
        id: 1,
        email: "omm@gmail.com"
    },
]
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogedin'));


// destructure.........................
const course = {
    courcename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
    instructor: "me"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course 

console.log(instructor);
console.log(course.instructor);

// api's

// in jayson all the values are called from a key
{
    "name": "omm",
    "coursename": "js in hindi",
    "price": "free"
}

[
    {},
    {},
    {}
]