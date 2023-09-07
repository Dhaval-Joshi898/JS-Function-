const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    {
      id: "p2",
      name: "Oranges",
      category: "Fruits",
      price: 1.99,
      inStock: false
    },
    {
      id: "p3",
      name: "Blueberries",
      category: "Fruits",
      price: 4.99,
      inStock: true
    },
    {
      id: "p4",
      name: "Carrots",
      category: "Vegetables",
      price: 1.0,
      inStock: true
    },
    {
      id: "p5",
      name: "Tomatoes",
      category: "Vegetables",
      price: 1.5,
      inStock: true
    }
  ];
  function searchAndBuyProduct(productList,productName){
     //Implement Your function here.
    const product=productList.find((prodName)=>{
        if(prodName.inStock){
            // prodName.inStock=false;
            return prodName.name===productName;
        }
        else{
            return false;
        }
    })
    if(product){   //here product contains some values i.e true if contains
        product.inStock = false;
        return product;
    }
    else{
        return null;
    }
//    return searchAndBuyProduct
  }
productsAvailable=searchAndBuyProduct(productList,'Tomatoes')
console.log(productsAvailable)

// const productList = [
//     { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
//     {
//       id: "p2",
//       name: "Oranges",
//       category: "Fruits",
//       price: 1.99,
//       inStock: false
//     },
//     {
//       id: "p3",
//       name: "Blueberries",
//       category: "Fruits",
//       price: 4.99,
//       inStock: true
//     },
//     {
//       id: "p4",
//       name: "Carrots",
//       category: "Vegetables",
//       price: 1.0,
//       inStock: true
//     },
//     {
//       id: "p5",
//       name: "Tomatoes",
//       category: "Vegetables",
//       price: 1.5,
//       inStock: true
//     }
//   ];

// function searchAndBuyProduct(productList, productName) {
//     const product = productList.find((prod) => {
//         if (prod.inStock) {
//             return prod.name === productName;
//         } else {
//             return false;
//         }
//     });

//     if (product) {
//         product.inStock = false;
//         return product;
//     } else {
//         return null; // Product not found or not in stock
//     }
// }

// const purchasedProduct = searchAndBuyProduct(productList, 'Tomatoes');
// console.log(purchasedProduct);
