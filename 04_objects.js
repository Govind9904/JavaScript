// const tinderUser = new Object() // single term object

const tinderUser ={}  // multi term object

tinderUser.id = "123abc"
tinderUser.name="govind"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email :"123@gmail.com",
    fullname :{
        userfullName : {
            firstname :"Govind",
            lastname :"Prajapati"

        }

    }
}
// console.log(regularUser);

const obj1 ={ 1:"a", 2:"b"}
const obj2 ={ 3:"a", 4:"b"}
const obj4 ={ 5:"a",6:"b"}

const obj3 ={...obj1,...obj2,...obj4}

// const obj3 =Object.assign( {},obj1 ,obj2,obj4)
// const obj3 ={ obj1,obj2 }
// console.log(obj3);

user =[
    {
        id:1,
        email:"23@gmail.com"
    },
    {
        id:1,
        email:"23@gmail.com"
    },
    {
        id:1,
        email:"23@gmail.com"
    }
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course={
    courseName:"js in hindi",
    coursePrice:"999",
    courseInstructor:"Govind",
}

const {courseInstructor : instructor}=course

// console.log(courseInstructor);
console.log(instructor);
