//Function Declaration
//Function declaration  are hoisted and can be called before declaration
function sum(a,b){
    return a+b;
}

console.log(sum(5,5))



//Function Expression

var sum2=function(a,b){        // function without a name is called as "Anonymous Function"
    return a+b;
}
console.log(sum2(5,5))


// function expression are hoisted but cannot be called before declaration.

//Example below

/* console.log(sum1(5,5))      //will give error
   var sum1=function(a,b){       
    return a+b;
   } 
*/
