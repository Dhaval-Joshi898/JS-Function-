//Currying in JS
function add(a,b,c){
    return a+b+c;

}

function addition(a){
    return function b(b){
        return function(c){
            return a+b+c
        }
    }
}


