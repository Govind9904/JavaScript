var c = 600
let a = 90
if (true) {
    let a = 10
    // console.log("INNER C :",c);
    const b = 20
    var c = 30
    // console.log("INNER C :",c);
    var c = 133
    // console.log("INNER C :",c);
    // console.log("INNER :", a);
}
var c = 60
//  {} curly braces is scope
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    username = "Govind"
    function two() {
        website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()  

if(true){
    const username = "Govind"
    if (username === "Govind") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//  +++++++++++++++++++ intersting +++++++++++++++++++//

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5) 
// console.log(addOne(5));
// console.log(addTwo(5));


