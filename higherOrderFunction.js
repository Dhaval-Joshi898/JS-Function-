//Higher Order Function
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