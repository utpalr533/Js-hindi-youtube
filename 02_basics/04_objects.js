// const tinderUser = new object() single ter object
const tinderUser = {} //non - single tern object
 tinderUser.id = "123abc"
 tinderUser.name = "Samay"
 tinderUser.isLoggedIn = false

//console.log(tinderUser)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"utpal",
            lastname:"rajbongshi"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1 ={1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3)


const users = [
    {
        id:1,
        email:"utpal@gmail.com"
    },
    {
        id:1,
        email:"utpal@gmail.com"
    },
    {
        id:1,
        email:"utpal@gmail.com"
    }    

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))


//console.log(tinderUser.hasOwnProperty('IsLoggedIn'));


const course = {
    coursename: "Js in Hindi",
    price:"999",
    courseInstructor:"utpal"
}
//course.courseInstrucor
const{courseInstructor: instructor}=course
console.log(instructor)

// const navbar =({company}) => {

// }
//        navbar(company="utpal")

// {
//     "name":"utpal",
//     "coursename":"JS in Hindi",
//     ""price":"Free"
// }
