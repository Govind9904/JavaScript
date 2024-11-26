const  user={
    username :"Govind",
    price : 999,


    welcomeMessage : function(){
        console.log(`${this.username},welcome to our website`);
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username ="hitesh"
// user.welcomeMessage()
// console.log(this);


// function chai(){
    //    username ="Govind"
//     console.log(this);
// }
// chai()
//   ++++++++++++ Arrow used to declare function +++++++++++++++++++


// const chai =function(){
//     let username ="Govind"
//     console.log(this.username);
    
// }
// chai()

const chai =()=>{
    let username ="Govind"
    console.log(this.username);
    
}
// chai()


// const addTwo=(num1,num2) =>{
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2


// const addTwo = (num1,num2) =>  (num1 + num2) //  most use in react



const addTwo = (num1,num2) => ({username : "Govind"})
console.log(addTwo(3,4));
