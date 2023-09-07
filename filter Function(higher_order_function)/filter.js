const arr=[1,2,-3,-4,5]


const positives=arr.filter(noNegative);

function noNegative(num){
  return num>0
}
console.log('Positive number arrays')
console.log(positives)   //this will return the array

const neg=arr.filter((num)=>{
    return num<0
})
console.log("Negative number arrays")
console.log(neg)

