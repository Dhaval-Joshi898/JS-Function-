// Callback Function
//Function passes as parameter inside another function
function greet(wish){
    // console.log(wish);    //and this if uncommented then calling greet(sayHi)will give the whole function
    console.log(wish());
}

function sayHi(){
    return "Hi"

}

function sayHello(){
    return "Hello"
}

greet(sayHi)    //if called this the greet function has alreadu conosle with this ()  if not this() then it will give the whole function as it is


 
//Another example of call back function
function ques(ans){
    ans()
}
function ans(){
    console.log("Answer to the question")
}
ques(ans)