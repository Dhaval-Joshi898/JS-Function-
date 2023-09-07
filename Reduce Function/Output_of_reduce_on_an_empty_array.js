const arr=[]

const values=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},5)

// const values=arr.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// })  if no initial value is passed it will throw an error

console.log(values)


//If we apply the reduce to an empty array, it will print the initial value that is passed although if the no initial value is passed with an empty array, it will throw an error.