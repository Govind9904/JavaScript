// singleton
//Object.create

// object literals
const mySym = Symbol("key1")

const Jsuser={
    name :"govind",
    "full name":"govind prajapati",
    [mySym] :"myKey1",
    age :18,
    email :"govind992004@gmail.com",
    location :"jaipur",
    isloggedin :false
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log( typeof Jsuser.mySym);
// console.log(typeof Jsuser[mySym]);

Jsuser.email="prajapati@gmail.com" 
// Object.freeze(Jsuser); 
Jsuser.email="govind@jsemail.com"
// console.log(Jsuser);

  
Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greetingTwo= function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
