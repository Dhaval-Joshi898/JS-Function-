//Higher Order Function

/* A Higher Order Function is a function :
   1.which accepts a function as an argument
   2.Returns a Function            */

const inputs  =[2,4,6,8,10,12,14,16,18]

function square(input){
    const squareValues=[];
    for (let num of input){
        
        squareValues.push(num * num);
        
    }
    return squareValues
}
console.log("Square of all values inside array are as follows:")
console.log(square(inputs))


function cubic(input){
    const cubicValues=[];
    for(let num of input){
        cubicValues.push(num*num*num)
    }
    return cubicValues
}
console.log("Cube of all values inside array are as follows:")
console.log(cubic(inputs))

/*Note in both the function all the other codes are same only the main operation i.e for square and cube 
is changing and because of that the other lines of code are repeating in coding you should follow
DRY (Do Not Repeat Yourself) so to follow this we will convert the above function the ocde in Higher Order Function          */