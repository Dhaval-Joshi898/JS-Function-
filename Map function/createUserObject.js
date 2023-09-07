//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){
    //Implement your function here
    const values=ids.map((currentElement,index)=>{
        return {
            id:currentElement,
            name:names[index],
            image:images[index]
        }
    })
    console.log(values)
}
createUserObjects(ids,names,images)