fruit=['banana','apple','mango']

var output=fruit.map((currentElement,index)=>{
  return {[index]: currentElement.length}
})

console.log(output)


//output is [ { '0': 6 }, { '1': 5 }, { '2': 5 } 

/*To create an array of objects, you have to return the object from the map callback function using the correct syntax. 
When using a variable to define a key in an object literal, you must wrap it in square brackets [] otherwise, 
it will simply print the ind as a string.
*/

//The map() function is used for transforming values and creating a new array, while forEach() is used for performing actions on each array element.


//QUestion :What happens if no callback function is passed to the map() function in JavaScript.

let data=[2,5,7]
const op=data.map()
console.log(op)

//ANS:_The map() function throws an error.

//The map() function in JavaScript requires a callback function as an argument. If no callback function is provided, it violates the expected usage of the map() function, and as a result, an error will be thrown.


// Question:- What happens if the callback function provided to the map() function does not return a value?

let nums=[5,10,15,20]
const b=nums.map((currentElement,index)=>{

})
console.log(b)

//op is [ undefined, undefined, undefined, undefined ]
// ANS:-If the callback function does not explicitly return a value, it returns undefined by default. 
// Therefore, when the callback function does not return a value, the map() function includes undefined values for each element in the resulting array.