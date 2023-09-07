const values=[2,3,4,5,6]
//Accumulator will conatian the initial values if mentioned here mentioned i.e 0 
const output=values.reduce((accumulator,currentValues,indexes)=>{
    console.log(`acc: ${accumulator}, num: ${currentValues}, indexes: ${indexes}`)
            return accumulator+currentValues

},0)   //o is initial value

console.log(output)

//Output of above code 
/* acc: 0, num: 2, indexes: 0
acc: 2, num: 3, indexes: 1
acc: 5, num: 4, indexes: 2
acc: 9, num: 5, indexes: 3
acc: 14, num: 6, indexes: 4
20    */

// if not mentioned initial values

const op=values.reduce((accumulator,currentValues,indexes)=>{
    console.log(`acc: ${accumulator}, num: ${currentValues}, indexes: ${indexes}`)
            return accumulator+currentValues

})
console.log(op)

// Output of above code
//Here accumulator will contain the first value of elemnet if iniitial value is not given and the indexes will increased by 1
// that means indexes window;; start form one_(1)
/*
acc: 2, num: 3, indexes: 1
acc: 5, num: 4, indexes: 2
acc: 9, num: 5, indexes: 3
acc: 14, num: 6, indexes: 4
20
*/  
