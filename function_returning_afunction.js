/*  Function Returning a Function   */

function greet(message){
    return function (wish){
         console.log(`${wish},${message}`)
    }
}

//now calling a function
var greeting=greet('Welcome to learn Javascript')   //here give para,eter because the function demands parameter

console.log(greeting)   //this will contain the anonymous function inside greet function :function (wish){ console.log(`${wish},${message}`)}
//And to call that function we need to call greeting which conatians that function

greeting('Hello') //the anonymous function also has parameter so ARGUMENT is needed to pass


