//    PURE FUNCTION                //

//Pure function is a function which returns same output for same set of inputs. Its output is not manipulated by any external factors.

function sum(num1 ,num2){    //   this is a pure function
    return num1 + num2       //    if used console instead of return than it will be impure function
}                            //     because console is provided by browser web api
console.log(sum(5,5))



// Impure function

const num1=6;

function calculate(num2){    // this is a impure function
    return num2+num1         // it is dependent on num1 and values will change always if num1 is changed
}
console.log(calculate(5))
