// reduce()

//arr.reduce(Redfn,inititalValue)   //the inititalValue is taken by the accumulator if mentioned

// function RedFn(accumulator,currentElement,Indexes,array){    accumulaor is main parameter other are optional
                           //calling  this function above in reduce as a parameter
// }

const arr=[1,2,4,6,7,8]

const even=arr.reduce((acc,num,indexes)=>{
    console.log(`acc:${acc},num:${num},indexes${indexes}`)
    return acc+num
},0)
console.log(`THe addition is ${even}`)