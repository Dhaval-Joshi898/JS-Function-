//create you curried function here with name pizzaPricing.
// function pizzaPricing(size){
//     let basePrice
//     if (size==='Small'){
//         basePrice=8.00;
//     }
//     else if(size==='Medium'){
//         basePrice=10.00;
//     }
//     else if(size==='Large'){
//         basePrice=12.00;
//     }
//     else{
//       return "Inavalid Size"
//     }
  
//     return function(arrtopings){
//         return function(quantPizza){
//          totalPrice=parseFloat((basePrice + arrToppings) * quantPizza)
//             return totalPrice.toFixed(2);
//         }
//     }
// }

// console.log(pizzaPricing('Medium')(1.5)(2))
function pizzaPricing(size) {
    const basePrices = {
      small: 8.0,
      medium: 10.0,
      large: 12.0,
    };
    const toppingPrice = 1.5;
  
    // Return a curried function
    return function (toppings) {
      // Return another function
      return function (quantity) {
        // Calculate the base price based on the selected size
        const basePrice = basePrices[size.toLowerCase()];
  
        // Calculate the total price including toppings
        const totalPrice = (basePrice + toppings.length * toppingPrice) * quantity;
  
        // Round the total price to two decimal places
        return totalPrice.toFixed(2);
      };
    };
  }
  
  // Example usage:
  const calculateTotalPrice = pizzaPricing("Medium"); // Returns a curried function
  const withToppings = calculateTotalPrice(["Panner", "Mushrooms"]); // Returns another function
  const total = withToppings(3); // Calculates the total price for 3 pizzas with toppings