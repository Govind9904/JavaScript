// function addTwoNum(num1,num2){
//     console.log(num1+num2);
    
// }
function addTwoNum(num1,num2){
    // let result= num1 + num2
    // return result


    // console.log("Govind");

    return num1 + num2
    
}
const result=addTwoNum(3 ,4)

// console.log("Result :", result);


function loginUserName(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username}  just logged in `
    
}

// console.log(loginUserName("Govind"))
// console.log(loginUserName())

function calculateCartPrice(...num1){
  return num1
}
// console.log(calculateCartPrice(555,55,22,4));


const user={
    Username :"Govind",
    price:199
}

function handleObject(anyObject){
   console.log(`username is ${anyObject.Username} and the price is ${anyObject.price}`);
   
}
handleObject(user)

const myNewArray=[25,54,2,7,41]

function retuenSecondArray(getArray){
    return getArray[1]
}
console.log(retuenSecondArray(myNewArray));
