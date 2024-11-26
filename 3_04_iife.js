// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    })();

( (name) =>{
    // umnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
    
})('GOVIND')