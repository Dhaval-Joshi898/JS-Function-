function main() {
    const array = [2, 4, 6, 2, 7, 8];
    //Write your code here.
    //Create your higher order functiomn here with the name customMap with takes two parameter array and a callback function.
    //The function should return an array
    //Do not modify any other code.
    
    function customMap(array,fn){
        updatedArray=[];
        for(let num of array){
            updatedArray.push(fn(num))
        }
        return updatedArray
    }
    function square(number){
        return number*number
    }
  
    return customMap(array,square);
  }
console.log(main())