// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023 , 0, 23,5,3 )
// let myCreateDate = new Date( "2024-01-14")
let myCreateDate = new Date("2024-01-14")
// let myCreateDate = new Date(2024 , 9, 22)
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now() / 100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})
