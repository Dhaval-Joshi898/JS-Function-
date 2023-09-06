//create you curried function here with name pizzaPricing.
function pizzaPricing(size){
    let basePrice
    if (size==='Small'){
        basePrice=8.00;
    }
    else if(size==='Medium'){
        basePrice=10.00;
    }
    else if(size==='Large'){
        basePrice=12.00;
    }
    else{
      return "Inavalid Size"
    }
  
    return function(arrtopings){
        return function(quantPizza){
         totalPrice=parseFloat((basePrice + arrToppings) * quantPizza)
            return totalPrice.toFixed(2);
        }
    }
}

console.log(pizzaPricing('Medium')(1.5)(2))