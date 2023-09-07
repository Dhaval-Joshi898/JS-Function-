const numbers=[1,2,3,4,5,6,7,8,9,10]

const a=numbers.find((currentNumber,index)=>{
    return currentNumber===8

})
console.log(`find()`,a)

const b=numbers.findIndex((currentNumber,index)=>{
    return currentNumber===8

})
console.log('findIndex()',b)